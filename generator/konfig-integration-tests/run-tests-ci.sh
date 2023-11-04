#!/bin/bash

# Function to run yarn jest with shard
run_test() {
  shard=$1
  echo "Running yarn jest with --shard=$shard..."
  yarn jest --shard=$shard
}

# Run tests in parallel and capture exit codes
run_test "1/3" &
pid1=$!
run_test "2/3" &
pid2=$!
run_test "3/3" &
pid3=$!

# Wait for all tests to complete and capture exit codes
wait $pid1
exit_code1=$?
wait $pid2
exit_code2=$?
wait $pid3
exit_code3=$?

# Check for non-zero exit codes
if [ $exit_code1 -ne 0 ] || [ $exit_code2 -ne 0 ] || [ $exit_code3 -ne 0 ]; then
  echo "Some tests failed."
  exit 1
fi

echo "All tests passed."
exit 0
