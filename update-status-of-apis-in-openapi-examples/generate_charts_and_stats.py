from typing import List
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime
import yaml
import os
import pandas as pd  # Added import for pandas
import logging  # Added import for logging
from colorlog import ColoredFormatter  # Added import for ColoredFormatter
import os

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

def generate_charts_and_stats(file_path, average_response_time):
    # Load the YAML file
    logging.info(f"Loading YAML file from {file_path}")
    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)

    # Extract the timestamps and response times
    if 'logs' not in data:  # Check if 'logs' exists in the data
        logging.error("No 'logs' in the data. Exiting.")
        return
    if not data['logs']:  # Check if 'logs' is empty
        logging.error("No 'logs' in the data. Exiting.")
        return
    logs = list(data['logs'].keys())[0]  # Get the first URL in "logs" property
    if 'status' in data['logs'][logs]:  # Check if 'status' is in the logs
        logs = data['logs'][logs]['status']
    else:
        logging.error("No 'status' in the logs. Exiting.")
        return

    # Filter out entries where 'reachable' is not True and response_time is "N/A"
    logs = [entry for entry in logs if entry['reachable'] and entry['responseTime'] != "N/A"]

    # If none of the entries are reachable, exit
    if not logs:
        logging.error("None of the entries are reachable. Exiting.")
        return

    # Remove super outlier response times
    response_times = [int(entry['responseTime'][:-2]) for entry in logs]
    # Calculate the threshold based on data
    threshold = max(response_times) * 0.9  # Assuming 90% of the maximum response time is the threshold
    response_times = [time for time in response_times if time < threshold]

    timestamps = [datetime.strptime(entry['timestamp'], '%Y-%m-%dT%H:%M:%S.%fZ') for entry in logs if int(entry['responseTime'][:-2]) < threshold]

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
    plt.title('Response Time Over Time (4-Hour and 24-Hour Rolling Averages)', fontsize=14)  # Increase the font size of the title
    plt.xticks(rotation=45, fontsize=10)  # Increase the font size of the x-axis tick labels
    plt.yticks(fontsize=10)  # Increase the font size of the y-axis tick labels
    plt.grid(True)  # Add grid lines
    plt.axhline(y=average_response_time, color='r', linestyle='--', label=f'Average Response Time from All APIs: {average_response_time} ms')
    plt.legend(['4-Hour Rolling Average', '24-Hour Rolling Average', 'Average Response Time from All APIs'], prop={'size': 10})  # Increase the font size of the legend
    plt.tight_layout()  # Prevent x labels from getting cut off
    chart_file_path = os.path.join(os.path.dirname(file_path), 'response_time_chart.png')
    plt.savefig(chart_file_path)  # Save the chart next to the status_log.yaml file
    plt.close()  # Close the plot after saving to file
    logging.info(f"Chart generated and saved successfully at {chart_file_path}.")

def parse_response_time(response_time):
    if response_time == "N/A":
        return None
    return int(response_time[:-2])

def get_response_times(file_path: str) -> List[int]:
    # Load the YAML file
    logging.info(f"Loading YAML file from {file_path}")
    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)

    # Extract the timestamps and response times
    if 'logs' not in data:  # Check if 'logs' exists in the data
        logging.error("No 'logs' in the data. Exiting.")
        return []
    if not data['logs']:  # Check if 'logs' is empty
        logging.error("No 'logs' in the data. Exiting.")
        return []
    logs = list(data['logs'].keys())[0]  # Get the first URL in "logs" property
    if 'status' in data['logs'][logs]:  # Check if 'status' is in the logs
        logs = data['logs'][logs]['status']
    else:
        logging.error("No 'status' in the logs. Exiting.")
        return []
    response_times = [parse_response_time(response_time['responseTime']) for response_time in logs]
    response_times = [response_time for response_time in response_times if response_time is not None]
    logging.info(f"Found {len(response_times)} response times in {file_path}")
    return response_times

if __name__ == "__main__":
    # compute average response time from every status_log.yaml file
    total_response_time = 0
    total_responses = 0
    all_response_times: List[int] = []
    for root, dirs, files in os.walk(os.path.join('..', 'sdks', 'openapi-examples')):
        for file in files:
            if file == 'status_log.yaml':
                response_times = get_response_times(os.path.join(root, file))
                all_response_times += response_times

    average_response_time = sum(all_response_times) / len(all_response_times)

    for root, dirs, files in os.walk(os.path.join('..', 'sdks', 'openapi-examples')):
        for file in files:
            if file == 'status_log.yaml':
                generate_charts_and_stats(os.path.join(root, file), average_response_time)
