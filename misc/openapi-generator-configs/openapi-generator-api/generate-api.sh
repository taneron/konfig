#!/usr/bin/env bash

openapi-generator-cli generate -c config.yaml -g spring -i api.yaml -o ~/Git/openapi-generator-api --global-property api="ApiStatus"