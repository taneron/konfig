#!/bin/bash

cd "$(dirname "$0")"

./start-server.sh & ./start-blackd.sh