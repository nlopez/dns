pwd := $(shell pwd)
container := stackexchange/dnscontrol:4.24.0
docker_cmd := docker run --rm \
	-v $(pwd)/dnsconfig.js:/dns/dnsconfig.js \
	-v $(pwd)/creds.json:/dns/creds.json \
	-v $(pwd):/work \
	--workdir /work $(container)

preview: creds
	@$(docker_cmd) preview

push: creds
	@$(docker_cmd) push

creds:
	@test -s creds.json || op inject --in-file creds.json.tpl --out-file creds.json --force --file-mode 0600

clean:
	@rm -v creds.json
