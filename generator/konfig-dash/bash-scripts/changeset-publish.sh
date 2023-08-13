#!/bin/bash

yarn build
yarn workspaces foreach -tv run changeset:publish
