from typing import Any, List
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime, timedelta
import yaml
import os
import pandas as pd  # Added import for pandas
import logging  # Added import for logging
from colorlog import ColoredFormatter  # Added import for ColoredFormatter
import os
from scipy import stats

# Set up the logger
logger = logging.getLogger()
logger.setLevel(logging.INFO)
formatter = ColoredFormatter(
    "%(log_color)s%(levelname)-8s%(reset)s %(log_color)s%(message)s",
    datefmt=None,
    reset=True,
    log_colors={
        'DEBUG':    'cyan',
        'INFO':     'blue',
        'WARNING':  'yellow',
        'ERROR':    'red',
        'CRITICAL': 'red,bg_white',
    }
)
stream_handler = logging.StreamHandler()
stream_handler.setFormatter(formatter)
logger.addHandler(stream_handler)

def parse_status_log(file_path: str) -> dict[str, Any]:
    # Load the YAML file
    logging.info(f"Loading YAML file from {file_path}")
    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)

    # Extract the timestamps and response times
    if 'logs' not in data:  # Check if 'logs' exists in the data
        logging.error("No 'logs' in the data. Exiting.")
        return {}
    if not data['logs']:  # Check if 'logs' is empty
        logging.error("No 'logs' in the data. Exiting.")
        return {}

    all_logs = {}
    for (url, logs) in data['logs'].items():  # Check if 'status' is in the logs
        if "status" in logs:
            all_logs[url] = logs["status"]
    return all_logs

def filter_non_reachable_and_na(logs):
    return [entry for entry in logs if entry['reachable'] and entry['responseTime'] != "N/A"]

def filter_past_three_months(logs):
    return [entry for entry in logs if parse_timestamp(entry['timestamp']) > datetime.now() - timedelta(days=90)]

def filter_outliers(logs):
    # Remove super outlier response times using z-score
    response_times = [int(entry['responseTime'][:-2]) for entry in logs]
    z_scores = stats.zscore(response_times)

    # add z_scores to all entries
    for entry, z_score in zip(logs, z_scores):
        entry['z_score'] = z_score

    # Calculate the z-score for each response time
    # Define a threshold for z-score
    threshold = 3

    # Filter out the response times that have a z-score greater than the threshold
    filtered_logs = [entry for entry in logs if entry['z_score'] < threshold]

    # Log if any values were removed
    if len(logs) != len(filtered_logs):
        removed_entries = [entry for entry in logs if entry not in filtered_logs]
        logging.info(f"Removed {len(removed_entries)} entries with z-score greater than {threshold}. The removed entries are: {removed_entries}")

    return filtered_logs

def parse_timestamp(timestamp: str) -> datetime:
    return datetime.strptime(timestamp, '%Y-%m-%dT%H:%M:%S.%fZ')

def generate_plot_for_logs(url, logs, average_response_time):
    # Filter out the response times that have a z-score greater than the threshold
    response_times = [parse_response_time(entry['responseTime']) for entry in logs]
    timestamps = [parse_timestamp(entry['timestamp']) for entry in logs]

    # Convert to pandas DataFrame
    df = pd.DataFrame({'timestamp': timestamps, 'response_time': response_times})

    # Calculate the rolling averages
    df['rolling_avg_4h'] = df['response_time'].rolling(4).mean()  # 4 hours
    df['rolling_avg_24h'] = df['response_time'].rolling(24).mean()  # 24 hours
    # Create the line graph
    plt.figure(figsize=(10, 5))  # Set the figure size to be narrower
    plt.plot_date(mdates.date2num(df['timestamp']), df['rolling_avg_4h'], linestyle='-', markersize=2, alpha=0.5)  # 4-hour rolling average is 50% transparent
    plt.plot_date(mdates.date2num(df['timestamp']), df['rolling_avg_24h'], linestyle='-', alpha=1, markersize=0)  # 24-hour rolling average is not transparent
    plt.xlabel('Time', fontsize=12)  # Increase the font size of the x-axis label
    plt.ylabel('Response Time (ms)', fontsize=12)  # Increase the font size of the y-axis label
    plt.title(f'Response Time Over Time for {url} (4-Hour and 24-Hour Rolling Averages)', fontsize=14)  # Increase the font size of the title
    plt.xticks(rotation=45, fontsize=10)  # Increase the font size of the x-axis tick labels
    plt.yticks(fontsize=10)  # Increase the font size of the y-axis tick labels
    plt.grid(True)  # Add grid lines
    plt.axhline(y=average_response_time, color='r', linestyle='--', label=f'Average Response Time from All APIs: {average_response_time} ms')
    plt.legend(['4-Hour Rolling Average', '24-Hour Rolling Average', 'Average Response Time from All APIs'], prop={'size': 10})  # Increase the font size of the legend
    plt.tight_layout()  # Prevent x labels from getting cut off
    return plt

def generate_charts_and_stats(file_path, average_response_time):
    logs = parse_status_log(file_path)
    if logs is None:
        return

    for (url, logs) in logs.items():
        logs = filter_non_reachable_and_na(logs)
        if not logs:
            continue
        logs = filter_outliers(logs)
        logs = filter_past_three_months(logs)

        plt = generate_plot_for_logs(url, logs, average_response_time)
        # url encode the URL
        url_without_scheme = url.replace('https://', '').replace('http://', '')
        file_name = url_without_scheme.encode('utf-8').hex()
        file_name = f'{file_name}.png'
        chart_file_path = os.path.join(os.path.dirname(file_path), "response-time-charts", file_name)

        # ensure the directory exists
        os.makedirs(os.path.dirname(chart_file_path), exist_ok=True)

        plt.savefig(chart_file_path)  # Save the chart next to the status_log.yaml file
        plt.close()  # Close the plot after saving to file
        logging.info(f"Chart generated and saved successfully at {chart_file_path}.")

def parse_response_time(response_time):
    if response_time == "N/A":
        return None
    return int(response_time[:-2])

def get_response_times(file_path: str) -> dict[str, List[int]]:
    logs = parse_status_log(file_path)
    all_response_times = {}
    for (url, logs) in logs.items():
        if logs is None:
            continue
        logs = filter_non_reachable_and_na(logs)
        logs = filter_outliers(logs)

        response_times = [parse_response_time(entry['responseTime']) for entry in logs]
        response_times = [response_time for response_time in response_times if response_time is not None]
        logging.info(f"Found {len(response_times)} response times in {file_path}")
        all_response_times[url] = response_times
    return all_response_times

def all_status_log_files() -> List[str]:
    status_log_files = []
    filter_substring = os.getenv('FILTER', '')
    for root, dirs, files in os.walk(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'sdks', 'openapi-examples')):
        for file in files:
            if file == 'status_log.yaml' and filter_substring in root:
                status_log_files.append(os.path.join(root, file))
    return status_log_files

if __name__ == "__main__":
    # compute average response time from every status_log.yaml file
    total_response_time = 0
    total_responses = 0
    all_response_times: List[int] = []
    files = all_status_log_files()

    for file_path in files:
        response_times = get_response_times(file_path)
        for (url, times) in response_times.items():
            all_response_times += times

    average_response_time = sum(all_response_times) / len(all_response_times)

    logger.info(f"Average response time from all APIs in openapi-examples: {average_response_time} ms")

    for file_path in files:
        generate_charts_and_stats(file_path, average_response_time)
