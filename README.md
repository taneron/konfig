# Konfig

The monorepo that holds all...

## Getting started

Get the repository on your local machine. **Takes a minute.**

```shell
git clone https://github.com/konfig-dev/konfig
cd konfig
```

This repository has submodules so pull all of them. **Also take a few minutes.**

```shell
git submodule update --init --recursive --remote --merge
```

## Environment Setup

1. Run Postgres as a background process
2. Add a `.env` file to `generator/konfig-dash`

## How to run Konfig

1. Start the server with `yarn dev`

```shell
cd generator/konfig-dash
yarn dev
```
