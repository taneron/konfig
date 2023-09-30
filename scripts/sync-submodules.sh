#!/bin/bash

# Ensure we are in the root of the git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: must be run from within a git repository"
    exit 1
fi

# Update each submodule to the latest commit on its default branch
git submodule foreach '
    echo "Updating $name to the latest commit on the default branch"
    git checkout $(git symbolic-ref refs/remotes/origin/HEAD | sed "s@^refs/remotes/origin/@@" )
    output=$(git pull --rebase 2>&1)
    if [[ $output == *"Repository not found"* ]]; then
        echo "Error: Repository not found for submodule $name"
        echo "You may need to update the git config for this submodule."
        printf "Enter a different username for this submodule or skip (s): "
        read -r username
        if [[ $username != "s" ]]; then
            # Extract the repository owner and repository name from the current URL
            repo_url=$(git remote get-url origin)
            repo_owner=$(echo $repo_url | sed -n "s/.*github.com\/\([^\/]*\)\/.*/\1/p")
            repo_name=$(echo $repo_url | sed -n "s/.*github.com\/[^\/]*\/\(.*\)\.git/\1/p")
            # Set the new URL with the new username but the same repository owner and name
            git remote set-url origin "https://$username@github.com/$repo_owner/$repo_name.git"
            git checkout $(git symbolic-ref refs/remotes/origin/HEAD | sed "s@^refs/remotes/origin/@@" )
            git pull --rebase
        else
            echo "Skipping submodule $name"
        fi
    fi
'