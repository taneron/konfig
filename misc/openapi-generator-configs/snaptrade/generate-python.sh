#!/usr/bin/env bash

rm -rf ~/Git/snaptrade-python-sdk/*
openapi-generator-cli generate -c config-python.yml -i ~/Git/snaptrade-sdks/api.yaml -g python-prior -o ~/Git/snaptrade-python-sdk