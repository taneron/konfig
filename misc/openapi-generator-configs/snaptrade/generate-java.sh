#!/usr/bin/env bash

openapi-generator-cli generate -t templates/java -c config.yml -i api.yaml -g java -o /Users/dylanhuang/Git/snaptrade-java-sdk