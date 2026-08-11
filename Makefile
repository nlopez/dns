.ONESHELL:
pwd := $(shell pwd)
container := stackexchange/dnscontrol:4.36.1
docker_cmd := docker run --rm \
	-v $(pwd)/dnsconfig.js:/dns/dnsconfig.js \
	-v $(pwd):/work \
	-e CLOUDFLARE_API_TOKEN=$${CLOUDFLARE_API_TOKEN} \
	-e CLOUDFLARE_ACCOUNT_ID=$${CLOUDFLARE_ACCOUNT_ID} \
	--workdir /work $(container)

preview: check
	@$(docker_cmd) preview

plan: preview

push: check
	@$(docker_cmd) push

apply: push

check:
	@$(docker_cmd) version
	@$(docker_cmd) check
