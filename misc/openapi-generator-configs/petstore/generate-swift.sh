#!/usr/bin/env bash

rm -rf swift-sdk
openapi-generator-cli generate -c config-swift.yaml -i petstore.yaml -g swift5 -o ./swift-sdk