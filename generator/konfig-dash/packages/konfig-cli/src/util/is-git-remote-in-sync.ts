import * as shell from 'shelljs'

const script = `
#!/bin/bash

# Fetch the latest changes from the remote repository
git fetch

# Get the name of the current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Get the number of commits ahead of and behind the remote branch
commits_ahead=$(git rev-list --count --right-only "@{u}..")
commits_behind=$(git rev-list --count --left-only "@{u}..")

# Check if the current branch is ahead of or behind the remote branch
if [[ $commits_ahead -gt 0 && $commits_behind -gt 0 ]]; then
  echo "The current branch $current_branch is $commits_ahead commits ahead and $commits_behind commits behind the remote branch."
  exit 1
elif [[ $commits_ahead -gt 0 ]]; then
  echo "The current branch $current_branch is $commits_ahead commits ahead of the remote branch."
  exit 1
elif [[ $commits_behind -gt 0 ]]; then
  echo "The current branch $current_branch is $commits_behind commits behind the remote branch."
  exit 1
else
  echo "The current branch $current_branch is up to date with the remote branch."
  exit 0
fi
`

/**
 * Check if there are unpushed commits
 */
export async function isGitRemoteInSync(parameters?: { cwd?: string }) {
  const cwd = parameters?.cwd ? { cwd: parameters.cwd } : {}
  const result = shell.exec(script, {
    ...cwd,
  })
  return result.code === 0
}
