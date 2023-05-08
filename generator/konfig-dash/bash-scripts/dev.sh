#!/bin/bash

# parse command line arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    --no-python)
      no_python=true
      shift
      ;;
    *)
      echo "Invalid argument: $1"
      exit 1
      ;;
  esac
done

# make sure no processes are using the required ports
for port in 8911 8910 9090 10000; do
  process=$(lsof -t -i:$port)
  if [[ ! -z "$process" ]]; then
    echo "Killing process $process using port $port"
    kill -9 $process
  fi
done

# make sure you can run this from any directory
cd "$(dirname "$0")"

if sh ./guard.sh; then
  if [[ $no_python != true ]]; then
    echo "Running Python service"
    yarn start-python &
  else
    echo "Not running Python service"
  fi

  echo "Running \"dev\" for all packages"
  yarn workspaces foreach -piv -j unlimited run dev &
  echo "Running \"web\" server"
  yarn rw dev web
else
  echo "guard.sh failed, not running the other commands"
fi
