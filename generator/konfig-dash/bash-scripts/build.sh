#!/bin/bash

yarn workspaces foreach -pitv -j unlimited run build
