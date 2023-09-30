#!/bin/bash

# Ensure we're in the repo root
cd "$(dirname "$0")"

# Update each submodule to the latest commit on its current branch
git submodule foreach '
  echo "Updating $(basename "$toplevel")..."
  git checkout $(git symbolic-ref -q HEAD)
  git pull
'

# Commit and push the updates
git config user.name "konfig-bot"
git config user.email "bot@konfigthis.com"
git commit -am "Update submodules"
git push
