#!/bin/bash

# check if path is provided
if [ $# -eq 0 ]
  then
    echo "Please provide a path"
    exit 1
fi

# replace subfolder with provided path
path=$1

# remove trailing slash from path
path=${path%/}

# remove the submodule from the index
git submodule deinit -f $path

# remove the submodule from the .gitmodules file
git config -f .gitmodules --remove-section submodule.$path

# remove the submodule from the working directory
git rm --cached $path

# remove the submodule from the project files but keep the files
git add $path

# commit the changes
git commit -m "Removed submodule: $path"