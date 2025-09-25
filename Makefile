pwd := $(shell pwd)
container := stackexchange/dnscontrol:4.24.0
docker_cmd := docker run --rm \
	-v $(pwd)/dnsconfig.js:/dns/dnsconfig.js \
	-v $(pwd):/work \
	-e CLOUDFLARE_API_TOKEN=$${CLOUDFLARE_API_TOKEN} \
	-e CLOUDFLARE_ACCOUNT_ID=$${CLOUDFLARE_ACCOUNT_ID} \
	--workdir /work $(container)

preview: creds
	@$(docker_cmd) preview

push: creds
	@$(docker_cmd) push

creds:
	@test -s .envrc || op inject --in-file .envrc.tpl --out-file .envrc --force --file-mode 0600 && direnv allow

clean:
	@rm -v .envrc
