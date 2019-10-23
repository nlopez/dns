/*
   dnsconfig.js: dnscontrol configuration file for Desert Bluffs.
*/

DEFAULTS({'ns_ttl': '21600'});

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
var CF_PROXY_OFF = {'cloudflare_proxy': 'off'};     // Proxy disabled.
var CF_PROXY_ON = {'cloudflare_proxy': 'on'};       // Proxy enabled.

// Domains:

D('desertbluffs.com', REG_NONE, DnsProvider(CLOUDFLARE), DnsProvider(R53, 0),
  IGNORE('_acme-challenge'),
  IGNORE('lga1'),
  IGNORE('lga2'),
  CNAME('*', 'lga1.desertbluffs.com.'),
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
  TXT('_keybase', 'keybase-site-verification=Lct-frBpniq-ggU6A97Vv1gyRhB_jOzHfIeigdRr2zs'),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB')
);

D('radoncanyon.com', REG_NONE, DnsProvider(DNS_BIND, 0), DnsProvider(R53),
  A('192.168.222.3', '192.168.222.3'),
  A('gulftown', '192.168.239.250'),
  A('gw-astoria', '192.168.222.1'),
  A('gw-ev', '192.168.239.1'),
  A('harmonyhub', '192.168.239.54'),
  A('ichoron', '192.168.239.90'),
  A('knode1', '192.168.222.143'),
  A('knode1-storage', '192.168.220.143'),
  A('knode2', '192.168.222.144'),
  A('knode2-storage', '192.168.220.144'),
  A('mimic', '192.168.239.100'),
  A('minaret', '192.168.239.102'),
  A('nas1', '192.168.222.149'),
  A('nas1-ipmi', '192.168.222.148'),
  A('nas1-storage', '192.168.220.149'),
  A('nas2', '192.168.222.114'),
  A('nas2-ipmi', '192.168.222.113'),
  A('nas2-storage', '192.168.220.114'),
  A('ns1', '192.168.239.2'),
  A('ns2', '192.168.222.2'),
  A('ps4', '192.168.239.251'),
  A('ripe30453', '192.168.239.230'),
  A('shield', '192.168.239.235'),
  A('switch', '192.168.239.156'),
  A('wanderer', '192.168.239.125'),
  A('wg-astoria', '192.168.222.2'),
  A('wg-ev', '192.168.239.2')
);

// East Village
D(REV('192.168.239.0/24'), REG_NONE, DnsProvider(DNS_BIND),
  PTR('1', 'gw-ev.radoncanyon.com.'),
  PTR('2', 'ns1.radoncanyon.com.'),
  PTR('100', 'mimic.radoncanyon.com.'),
  PTR('102', 'minaret.radoncanyon.com.'),
  PTR('125', 'wanderer.radoncanyon.com.'),
  PTR('230', 'ripe30453.radoncanyon.com.'),
  PTR('235', 'shield.radoncanyon.com.'),
  PTR('156', 'switch.radoncanyon.com.'),
  PTR('54', 'harmonyhub.radoncanyon.com.'),
  PTR('251', 'ps4.radoncanyon.com.'),
  PTR('90', 'ichoron.radoncanyon.com.'),
  PTR('250', 'gulftown.radoncanyon.com.')
);

// Astoria VLAN LAB
D(REV('192.168.222.0/24'), REG_NONE, DnsProvider(DNS_BIND),
  PTR('149', 'nas1.radoncanyon.com.'),
  PTR('148', 'nas1-ipmi.radoncanyon.com.'),
  PTR('114', 'nas2.radoncanyon.com.'),
  PTR('113', 'nas2-ipmi.radoncanyon.com.'),
  PTR('143', 'knode1.radoncanyon.com.'),
  PTR('144', 'knode2.radoncanyon.com.'),
  PTR('1', 'gw-astoria.radoncanyon.com.'),
  PTR('2', 'ns2.radoncanyon.com.')
);

// Astoria VLAN STORAGE
D(REV('192.168.220.0/24'), REG_NONE, DnsProvider(DNS_BIND),
  PTR('149', 'nas1-storage.radoncanyon.com.'),
  PTR('114', 'nas2-storage.radoncanyon.com.'),
  PTR('143', 'knode1-storage.radoncanyon.com.'),
  PTR('144', 'knode2-storage.radoncanyon.com.')
);

D('aethertrail.com', REG_NONE, DnsProvider(R53),
  MX('@', 10, 'mail.protonmail.ch.'),
  MX('@', 20, 'mailsec.protonmail.ch.'),
  TXT('@', 'protonmail-verification=f1ab807d903a45b94591fa70864d795a030e118c'),
  TXT('@', 'v=spf1 include:_spf.protonmail.ch mx ~all'),
  TXT('_dmarc', 'v=DMARC1; p=none; rua=mailto:dmarc@aethertrail.com'),
  TXT('protonmail._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqK40KR7DItR/VwnMDNfNr18Ee5KHsK76NayU/tAi4BQqFFdWUL64bBjO9E/6MVKmtMyG3mJ1j6JmTxujxW6NErzn8ETV1THJm/AAosLAZ5CS6O747Tu5leXNqCDbYHnqymxMpm2DbiQlDJWH54DjdBeUYLt2GgqLUqBf0wG4BoQIDAQAB')
)
