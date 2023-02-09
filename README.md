# coding-practice
This repo is used to house coding challenges found on Hackerrank and possibly other sites in the future.

## Requirements

### Scripts

- Python 3
    - `requests`
    - `bs4`
- Brew
    - `imagemagick`
    - `freetype`

### Optional
- Pip 3
    - `virtualenv`

## Running

Three arguments are required to run the project to generate a template for the Hackerrank challenge:
- `folder` - where the code will live that being the overall folder name
- `language` - sub folder within the folder denoting the programming language, e.g. `Python`, `JavaScript` etc
- `url` - link to the Hackerrank challenge

It follows:

`make challenge NAME="<folder name>" LANGUAGE="<language>" URL="<url>"`

For example run the following command in the directory `Hackerrank/Problem Solving/Algorithms`:

`make challenge NAME="Simple Array Sum" LANGUAGE="TypeScript" URL="https://www.hackerrank.com/challenges/simple-array-sum"`