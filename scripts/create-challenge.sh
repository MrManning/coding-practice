#!/bin/bash

name=$1
language=$2

path=$name/$language

mkdir -p "$path"
cd "$path"

mkdir -p src
touch src/Solution.$(echo $language | tr '[:upper:]' '[:lower:]') README.md