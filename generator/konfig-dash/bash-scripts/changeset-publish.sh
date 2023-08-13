#!/bin/bash

yarn workspaces foreach -tv run changeset:publish
