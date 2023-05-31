#!/bin/bash

cd "$(dirname "$0")"

poetry run uvicorn main:app --reload
