#!/usr/bin/env bash

rm -rf kotlin-sdk
openapi-generator-cli generate -c config-kotlin.yaml -i petstore.yaml -g kotlin -o ./kotlin-sdk