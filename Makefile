.ONESHELL:
pwd := $(shell pwd)
container := stackexchange/dnscontrol:4.36.1
env_load := set -a; . $(pwd)/.env; set +a
docker_cmd := docker run --rm \
	-v $(pwd)/dnsconfig.js:/dns/dnsconfig.js \
	-v $(pwd):/work \
	-e CLOUDFLARE_API_TOKEN=$${CLOUDFLARE_API_TOKEN} \
	-e CLOUDFLARE_ACCOUNT_ID=$${CLOUDFLARE_ACCOUNT_ID} \
	--workdir /work $(container)

preview: check
	@direnv allow && $(env_load) && $(docker_cmd) preview

push: check
	@$(env_load) && $(docker_cmd) push

creds:
	@test -s .env || op inject --in-file $(pwd)/.env.tpl --out-file $(pwd)/.env

check: creds
	@$(env_load) && $(docker_cmd) version
	@$(env_load) && $(docker_cmd) check

clean:
	@rm -v .env
