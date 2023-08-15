#!/bin/bash

yarn changeset version

# To ensure all packages are built. Otherwise konfig-lib woill fail is konfig-openapi-spec is not build.
yarn build

# to regenerate any artifacts
yarn prepack
