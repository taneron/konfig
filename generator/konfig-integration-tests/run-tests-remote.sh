#!/bin/bash

earthly --sat med-boy --org konfig-publisher --config earthly-config.yaml --secret GITHUB_ACTIONS=true -P +test