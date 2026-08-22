# dns
[dnscontrol](https://github.com/StackOverflow/dnscontrol) DNS management for my personal domains

# Dependencies
* [Nix](https://nixos.org) + [devenv](https://devenv.sh)
* [direnv](https://direnv.net)
* `op` -- 1Password CLI

# Usage
`direnv allow` once, to load the devenv shell and Cloudflare credentials from 1Password.

`make` to preview changes. `make push` to apply.
