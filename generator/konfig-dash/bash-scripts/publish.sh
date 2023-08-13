#!/bin/bash

# Get the current package name and version from package.json
PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")

# Check if the version exists on npm using curl and extract HTTP status code
RESPONSE=$(curl -sL -w '"%{http_code}"' "https://registry.npmjs.org/$PACKAGE_NAME/$PACKAGE_VERSION")

if [[ "$RESPONSE" == "404" ]]; then
  # Version doesn't exist, proceed with publishing
  yarn npm publish
else
  echo "Version $PACKAGE_VERSION of $PACKAGE_NAME already exists on npm. Skipping publish."
fi
