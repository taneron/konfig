#!/usr/bin/env bash

rm -rf python-prior-sdk
openapi-generator-cli generate -c config-python-prior.yaml -i petstore.yaml -g python-prior -o ./python-prior-sdk