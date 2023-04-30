#!/usr/bin/env bash

rm -rf typescript-sdk
openapi-generator-cli generate -c config-typescript.yaml -i petstore.yaml -g typescript -o ./typescript-sdk