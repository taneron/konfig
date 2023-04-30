#!/usr/bin/env bash

rm -rf python-sdk
openapi-generator-cli generate -c config-python.yaml -i petstore.yaml -g python -o ./python-sdk