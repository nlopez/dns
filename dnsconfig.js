/*
   dnsconfig.js: dnscontrol configuration file for Desert Bluffs.
*/

DEFAULTS({ 'ns_ttl': '21600' });

// Providers:

var REG_NONE = NewRegistrar('none', 'NONE')
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI')
var R53 = NewDnsProvider('r53', 'ROUTE53');
var DNS_BIND = NewDnsProvider('bind', 'BIND', {
  'default_soa': {
    'master': 'ns1.radoncanyon.com.',
    'mbox': 'abuse.example.org.',
    'refresh': 10000,
    'retry': 2400,
    'expire': 604800,
    'minttl': 3600,
  },
  'default_ns': [
    'ns1.radoncanyon.com.',
    'ns2.radoncanyon.com.'
  ]
});

// CF proxy "orange cloud" aliases
var CF_PROXY_OFF = { 'cloudflare_proxy': 'off' };     // Proxy disabled.
var CF_PROXY_ON = { 'cloudflare_proxy': 'on' };       // Proxy enabled.

// Domains:

D('desertbluffs.com', REG_NONE, DnsProvider(CLOUDFLARE),
  // ignore dynamically updated records
  IGNORE('_acme-challenge'),
  IGNORE('lga1'),
  IGNORE('lga2'),
  IGNORE('[a-z]'),
  IGNORE('heimdall'),
  IGNORE('nextcloud'),
  IGNORE('httpbin'),
  IGNORE('login'),
  ALIAS('@', 'lga1.desertbluffs.com.'),
  CAA('@', 'iodef', 'mailto:sslabuse@desertbluffs.com', CAA_CRITICAL),
  CAA('@', 'issuewild', 'letsencrypt.org'),
  CAA('@', 'issue', 'letsencrypt.org'),
  A('unifi', '68.183.136.131'),
  AAAA('unifi', '2604:a880:400:d1::81a:6001'),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.'),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.'),
  CNAME('hypnotoad', 'hypnotoad.desertbluffs.com.s3-website-us-east-1.amazonaws.com.'),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.'),
  CNAME('zb14086362', 'zmverify.zoho.com.'),
  MX('@', 10, 'mx.zoho.com.'),
  MX('@', 20, 'mx2.zoho.com.'),
  MX('@', 50, 'mx3.zoho.com.'),
  MX('ses', 10, 'feedback-smtp.us-east-1.amazonses.com.'),
  TXT('_dmarc', 'v=DMARC1; p=reject; pct=100; rua=mailto:itadso9z@ag.dmarcian.com'),
  TXT('ses', 'v=spf1 include:amazonses.com ~all'),
  TXT('@', 'v=spf1 mx include:zoho.com include:ses.desertbluffs.com ~all'),
  TXT('_amazonses', 'nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU='),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB')
);

D('radoncanyon.com', REG_NONE, DnsProvider(DNS_BIND, 0), DnsProvider(R53),
  A('192.168.222.3.lga1', '192.168.222.3'),
  A('gulftown.lga2', '192.168.239.250'),
  A('gw.lga1', '192.168.222.1'),
  A('gw.lga2', '192.168.239.1'),
  A('harmonyhub.lga2', '192.168.239.54'),
  A('ichoron.lga2', '192.168.239.90'),
  A('knode1.lga1', '192.168.222.143'),
  A('knode1-storage.lga1', '192.168.220.143'),
  A('knode2.lga1', '192.168.222.144'),
  A('knode2-storage.lga1', '192.168.220.144'),
  A('mimic.lga2', '192.168.239.100'),
  A('minaret.lga2', '192.168.239.102'),
  A('nas1.lga1', '192.168.222.149'),
  A('nas1-ipmi.lga1', '192.168.222.148'),
  A('nas1-storage.lga1', '192.168.220.149'),
  A('nas2.lga1', '192.168.222.114'),
  A('nas2-ipmi.lga1', '192.168.222.113'),
  A('nas2-storage.lga1', '192.168.220.114'),
  A('ns1.lga2', '192.168.239.2'),
  A('ns1.lga1', '192.168.222.2'),
  A('ps4.lga2', '192.168.239.251'),
  A('ripe30453.lga2', '192.168.239.230'),
  A('switch.lga2', '192.168.239.156'),
  A('wanderer.lga2', '192.168.239.125'),
  A('wg.lga1', '192.168.222.2'),
  A('wg.lga2', '192.168.239.2')
);

// East Village
D(REV('192.168.239.0/24'), REG_NONE, DnsProvider(DNS_BIND),
  PTR('1', 'gw.lga2.radoncanyon.com.'),
  PTR('2', 'ns1.lga2.radoncanyon.com.'),
  PTR('100', 'mimic.lga2.radoncanyon.com.'),
  PTR('102', 'minaret.lga2.radoncanyon.com.'),
  PTR('125', 'wanderer.lga2.radoncanyon.com.'),
  PTR('230', 'ripe30453.lga2.radoncanyon.com.'),
  PTR('235', 'shield.lga2.radoncanyon.com.'),
  PTR('156', 'switch.lga2.radoncanyon.com.'),
  PTR('54', 'harmonyhub.lga2.radoncanyon.com.'),
  PTR('251', 'ps4.lga2.radoncanyon.com.'),
  PTR('90', 'ichoron.lga2.radoncanyon.com.'),
  PTR('250', 'gulftown.lga2.radoncanyon.com.')
);

// Astoria VLAN LAB
D(REV('192.168.222.0/24'), REG_NONE, DnsProvider(DNS_BIND),
  PTR('149', 'nas1.lga1.radoncanyon.com.'),
  PTR('148', 'nas1-ipmi.lga1.radoncanyon.com.'),
  PTR('114', 'nas2.lga1.radoncanyon.com.'),
  PTR('113', 'nas2-ipmi.lga1.radoncanyon.com.'),
  PTR('143', 'knode1.lga1.radoncanyon.com.'),
  PTR('144', 'knode2.lga1.radoncanyon.com.'),
  PTR('1', 'gw.lga1.radoncanyon.com.'),
  PTR('2', 'ns1.lga1.radoncanyon.com.')
);

// Astoria VLAN STORAGE
D(REV('192.168.220.0/24'), REG_NONE, DnsProvider(DNS_BIND),
  PTR('149', 'nas1-storage.lga1.radoncanyon.com.'),
  PTR('114', 'nas2-storage.lga1.radoncanyon.com.'),
  PTR('143', 'knode1-storage.lga1.radoncanyon.com.'),
  PTR('144', 'knode2-storage.lga1.radoncanyon.com.')
);

D('aethertrail.com', REG_NONE, DnsProvider(R53),
  MX('@', 10, 'mail.protonmail.ch.'),
  MX('@', 20, 'mailsec.protonmail.ch.'),
  TXT('@', 'protonmail-verification=f1ab807d903a45b94591fa70864d795a030e118c'),
  TXT('@', 'v=spf1 include:_spf.protonmail.ch mx ~all'),
  TXT('_dmarc', 'v=DMARC1; p=none; rua=mailto:dmarc@aethertrail.com'),
  CNAME('protonmail._domainkey', 'protonmail._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail2._domainkey', 'protonmail2._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail3._domainkey', 'protonmail3._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.')
)
