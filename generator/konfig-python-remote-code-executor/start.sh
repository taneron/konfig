#!/bin/bash

cd "$(dirname "$0")"

poetry run uvicorn main:app --host 0.0.0.0
