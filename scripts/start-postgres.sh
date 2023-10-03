#!/bin/bash

# Ensure we're in the repo root
cd "$(dirname "$0")"

# Start postgres using pg_ctl using the folder at ../postgres/data as the data directory
pg_ctl -D ../postgres/data start