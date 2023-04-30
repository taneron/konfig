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

# preserve files

cp -r $path ${path}_tmp

# remove the submodule from the working directory
git rm $path

# remove evidence of git for that submodule
rm ${path}_tmp/.git

# move preserved files back
mv ${path}_tmp $path

# remove the submodule from the project files but keep the files
git add $path

# commit the changes
# git commit -m "Removed submodule: $path"