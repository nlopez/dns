# dns
[octodns](https://github.com/github/octodns) management for my personal domains

# Workflow
## Pre-requisites 🏁
1. `direnv` and `git-crypt` via `brew bundle install`
2. `pipenv` via `pip install pipenv`

## Pre-flight ✅
1. `git-crypt unlock /path/to/key`
2. `direnv allow`
3. `env | grep AWS_` ensure vars are set

## Takeoff 🚀
1. `octodns-sync --config=./config/production.yaml`
2. `octodns-sync --config=./config/production.yaml --doit`