pwd := $(shell pwd)
container := stackexchange/dnscontrol:4.19.0
docker_cmd := docker run --rm -it \
	-v $(pwd)/dnsconfig.js:/dns/dnsconfig.js \
	-v $(pwd)/creds.json:/dns/creds.json \
	-v $(pwd):/work \
	--workdir /work $(container)

preview: creds
	@$(docker_cmd) preview

push: creds
	@$(docker_cmd) push

creds:
	@op inject -i creds.json.tpl -o creds.json --force
