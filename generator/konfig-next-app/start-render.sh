#!/bin/bash

# Ensure "RENDER" environment variable is set
if [ -z "$RENDER" ]; then
  echo "RENDER environment variable is not set"
  exit 1
fi

yarn start:next