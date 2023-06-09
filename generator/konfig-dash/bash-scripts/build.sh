#!/bin/bash

yarn workspaces foreach -pitv -j unlimited --exclude konfig-next-app  run build
