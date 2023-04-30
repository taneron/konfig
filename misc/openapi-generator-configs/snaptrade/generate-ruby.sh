#!/usr/bin/env bash

openapi-generator-cli generate -c config-ruby.yml -i api.yaml -g ruby -o ~/Git/snaptrade-ruby-sdk/client