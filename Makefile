pwd := $(shell pwd)
container := stackexchange/dnscontrol:v3.23.0
docker_cmd := docker run --rm -it \
	-v $(pwd)/dnsconfig.js:/dns/dnsconfig.js \
	-v $(pwd)/creds.json:/dns/creds.json \
	-v $(pwd):/work \
	--workdir /work $(container)

preview:
	@$(docker_cmd) preview

push:
	@$(docker_cmd) push

knot:
	@rsync zones/ -e 'ssh' --rsync-path 'sudo rsync' 192.168.239.2:/var/lib/knot/ -rv --exclude='.*'
	@ssh 192.168.239.2 sudo systemctl reload knot
