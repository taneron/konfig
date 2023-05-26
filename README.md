# Konfig

The monorepo that holds everything...

## Getting started

Get the repository on your local machine. **Takes a minute.**

```shell
git clone https://github.com/konfig-dev/konfig --recursive
cd konfig
```

This repository has submodules so pull all of them.  **Also take a few minutes.**

```shell
git submodule update --init --recursive --remote --merge
```

## Environment Setup

1. Run Postgres as a background process
2. Setup environment variables

Paste this into your `~/.zshrc` or `~/.bashrc`

```bash
if [ -f $HOME/.envvars ]; then
    . $HOME/.envvars
else
    print "404: ~/.envvars not found."
fi
```

Then create `~/.envvars` with values from Dylan.

## How to run Konfig

1. Make sure `node_modules` is initiated in `konfig-dash`

```shell
cd generator/konfig-dash
yarn # takes some time
```

2. Start the server with `yarn dev`

```shell
# inside generator/konfig-dash
yarn dev
```
