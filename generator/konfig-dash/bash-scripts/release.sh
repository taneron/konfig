#!/bin/bash

yarn workspaces foreach -tv --no-private run release-ci && git push --follow-tags
