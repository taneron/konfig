#!/usr/bin/env bash

rm -rf csharp-sdk
openapi-generator-cli generate -c config-csharp.yaml -i openapi-v2.json -g csharp -o ./csharp-sdk