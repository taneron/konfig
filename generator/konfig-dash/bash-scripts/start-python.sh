#!/bin/bash

echo "Starting Python service from 'start-python.sh'"

cd ../konfig-python-formatter-server-blackd && ./build-dev.sh && ./start.sh
