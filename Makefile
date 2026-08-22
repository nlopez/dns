.ONESHELL:

preview: check
	@dnscontrol preview

plan: preview

push: check
	@dnscontrol push

apply: push

check:
	@dnscontrol version
	@dnscontrol check
