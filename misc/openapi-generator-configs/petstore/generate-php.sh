#!/usr/bin/env bash

rm -rf php-sdk
openapi-generator-cli generate -c config-php.yaml -i petstore.yaml -g php -o ./php-sdk