#!/bin/bash

# Get the current package name and version from package.json
PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")

# Check if the version exists on npm
VERSION_EXISTS=$(npm view $PACKAGE_NAME@$PACKAGE_VERSION 2> /dev/null)

if [ -z "$VERSION_EXISTS" ]; then
  # Version doesn't exist, proceed with publishing
  yarn npm publish
else
  echo "Version $PACKAGE_VERSION of $PACKAGE_NAME already exists on npm. Skipping publish."
fi
