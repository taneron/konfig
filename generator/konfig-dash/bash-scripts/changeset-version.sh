#!/bin/bash

yarn changeset version

# to regenerate any version-dependent artifacts
yarn prepack
