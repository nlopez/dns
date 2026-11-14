# dns
[dnscontrol](https://github.com/StackOverflow/dnscontrol) DNS management for my personal domains

# Dependencies
* [Nix](https://nixos.org) + [devenv](https://devenv.sh)
* [direnv](https://direnv.net)
* `op` -- 1Password CLI

# Usage
`direnv allow` once, to load the devenv shell and Cloudflare credentials from 1Password.

`make` to preview changes. `make push` to apply.

# CI
`.github/workflows/dns.yml` runs `dnscontrol preview` on pull requests and posts the plan as a PR comment. Merging to `main` runs `dnscontrol push` in the `production` environment.

Required repository secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
