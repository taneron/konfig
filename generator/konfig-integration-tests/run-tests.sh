#!/bin/bash

earthly --config earthly-config.yaml --secret NPM_TOKEN='dummy' --secret GITHUB_ACTIONS=false -P +test