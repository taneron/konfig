#!/usr/bin/env bash

rm -rf objc-sdk
openapi-generator-cli generate -c config-objc.yaml -i petstore.yaml -g objc -o ./objc-sdk