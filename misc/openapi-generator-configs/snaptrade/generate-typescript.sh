#!/usr/bin/env bash

rm -rf ~/Git/snaptrade-typescript-sdk/*
openapi-generator-cli generate -c config-typescript.yml -i ~/Git/snaptrade-sdks/api.yaml -g typescript-fetch -o ~/Git/snaptrade-typescript-sdk