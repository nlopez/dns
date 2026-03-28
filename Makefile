.ONESHELL:
pwd := $(shell pwd)
container := stackexchange/dnscontrol:4.36.1
docker_cmd := docker run --rm \
	-v $(pwd)/dnsconfig.js:/dns/dnsconfig.js \
	-v $(pwd):/work \
	-e CLOUDFLARE_API_TOKEN=$${CLOUDFLARE_API_TOKEN} \
	-e CLOUDFLARE_ACCOUNT_ID=$${CLOUDFLARE_ACCOUNT_ID} \
	--workdir /work $(container)

preview: creds
	@direnv allow && $(docker_cmd) preview

push: creds
	@$(docker_cmd) push

creds: check
	@test -s .env || op inject --in-file $(pwd)/.env.tpl --out-file $(pwd)/.env

check:
	@$(docker_cmd) version
	@$(docker_cmd) check

clean:
	@rm -v .env
