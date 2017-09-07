# dns
[dnscontrol](https://github.com/StackOverflow/dnscontrol) management for my personal domains

# Workflow
## Pre-requisites 🏁
1. `direnv`, `git-crypt`, and `go` via `brew bundle install`
2. `go get github.com/StackExchange/dnscontrol`

## Pre-flight ✅
1. `git-crypt unlock /path/to/key`
2. `direnv allow`
3. `env | grep AWS_` ensure vars are set

## Takeoff 🚀
1. `dnscontrol preview`
2. `dnscontrol push`