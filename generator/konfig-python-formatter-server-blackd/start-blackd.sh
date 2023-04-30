#!/bin/bash

# Ensures this shell script can be run from any folder
cd "$(dirname "$0")"

poetry run blackd --bind-port 9090

