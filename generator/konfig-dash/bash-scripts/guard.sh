#!/bin/bash

if [[ -z "${SESSION_SECRET}" ]]; then
  echo "Error: SESSION_SECRET environment variable not set"
  exit 1
fi

if [[ -z "${DATABASE_URL}" ]]; then
  echo "Error: DATABASE_URL environment variable not set"
  exit 1
fi
