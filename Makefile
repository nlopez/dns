pwd := $(shell pwd)
container := stackexchange/dnscontrol:v0.2.5
docker_cmd := docker run --rm -it -v $(pwd)/dnsconfig.js:/dns/dnsconfig.js -v $(pwd)/creds.json:/dns/creds.json $(container)

preview:
	@$(docker_cmd) dnscontrol preview

push:
	@$(docker_cmd) dnscontrol push
