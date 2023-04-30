#!/usr/bin/env bash

rm -rf csharp-sdk
openapi-generator-cli generate -c config-csharp.yaml -i petstore.yaml -g csharp -o ./csharp-sdk