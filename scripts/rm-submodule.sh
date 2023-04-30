#!/bin/bash

# check if path is provided
if [ $# -eq 0 ]
  then
    echo "Please provide a path"
    exit 1
fi

# replace subfolder with provided path
path=$1

# execute commands with updated path
mv $path ${path}_tmp
git submodule deinit $path
git rm --cached $path
mv ${path}_tmp $path
rm -rf ${path}_tmp
git add $path
