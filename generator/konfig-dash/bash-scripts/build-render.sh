#!/usr/bin/env bash

rm -rf ../../.git

yarn && yarn build && yarn rw build api

