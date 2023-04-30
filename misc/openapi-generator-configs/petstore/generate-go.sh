#!/usr/bin/env bash

rm -rf go-sdk
openapi-generator-cli generate -c config-go.yaml -i petstore.yaml -g go -o ./go-sdk