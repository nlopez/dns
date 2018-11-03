/*
   dnsconfig.js: dnscontrol configuration file for Desert Bluffs.
*/

DEFAULTS({'ns_ttl': '21600'});

// Providers:

var REG_NONE = NewRegistrar('none', 'NONE')
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI')
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

// Domains:

D('desertbluffs.com', REG_NONE, DnsProvider(CLOUDFLARE),
  A('unifi', '165.227.124.32'),
  CAA('@', 'iodef', 'mailto:sslabuse@desertbluffs.com'),
  CAA('@', 'issue', 'letsencrypt.org'),
  CAA('@', 'issuewild', 'letsencrypt.org'),
  CNAME('a', 'astoria.port0.org.'),
  CNAME('b', 'astoria.port0.org.'),
  CNAME('c', 'astoria.port0.org.'),
  CNAME('d', 'astoria.port0.org.'),
  CNAME('e', 'astoria.port0.org.'),
  CNAME('f', 'astoria.port0.org.'),
  CNAME('g', 'astoria.port0.org.'),
  CNAME('h', 'astoria.port0.org.'),
  CNAME('i', 'astoria.port0.org.'),
  CNAME('j', 'astoria.port0.org.'),
  CNAME('k', 'astoria.port0.org.'),
  CNAME('l', 'astoria.port0.org.'),
  CNAME('m', 'astoria.port0.org.'),
  CNAME('n', 'astoria.port0.org.'),
  CNAME('o', 'astoria.port0.org.'),
  CNAME('p', 'astoria.port0.org.'),
  CNAME('q', 'astoria.port0.org.'),
  CNAME('r', 'astoria.port0.org.'),
  CNAME('s', 'astoria.port0.org.'),
  CNAME('t', 'astoria.port0.org.'),
  CNAME('u', 'astoria.port0.org.'),
  CNAME('v', 'astoria.port0.org.'),
  CNAME('w', 'astoria.port0.org.'),
  CNAME('x', 'astoria.port0.org.'),
  CNAME('y', 'astoria.port0.org.'),
  CNAME('z', 'astoria.port0.org.'),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.'),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.'),
  CNAME('hypnotoad', 'hypnotoad.desertbluffs.com.s3-website-us-east-1.amazonaws.com.'),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.'),
  CNAME('zb14086362', 'zmverify.zoho.com.'),
  MX('@', 10, 'mx.zoho.com.'),
  MX('@', 20, 'mx2.zoho.com.'),
  TXT('@', 'v=spf1 mx include:zoho.com ~all'),
  TXT('_amazonses', 'nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU='),
  TXT('_keybase', 'keybase-site-verification=Lct-frBpniq-ggU6A97Vv1gyRhB_jOzHfIeigdRr2zs'),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB'),
  IGNORE('_acme-challenge')
);

D('radoncanyon.com', REG_NONE, DnsProvider(DNS_BIND),
  A('nas1', '192.168.222.149'),
  A('nas1-storage', '192.168.220.149'),
  A('nas1-ipmi', '192.168.222.148'),
  A('nas2', '192.168.222.114'),
  A('nas2-storage', '192.168.220.114'),
  A('nas2-ipmi', '192.168.222.113'),
  A('biggs', '192.168.222.143'),
  A('wedge', '192.168.222.144'),
  A('wg-ev', '192.168.239.2'),
  A('wg-astoria', '192.168.222.2'),
  A('gw-ev', '192.168.239.1'),
  A('gw-astoria', '192.168.222.1'),
  A('ns1', '192.168.239.2'),
  A('ns2', '192.168.222.2'),
  A('mimic', '192.168.239.100'),
  A('minaret', '192.168.239.102'),
  A('wanderer', '192.168.239.125'),
  A('ripe30453', '192.168.239.230'),
  A('shield', '192.168.239.235'),
  A('switch', '192.168.239.156'),
  A('harmonyhub', '192.168.239.54'),
  A('ps4', '192.168.239.251'),
  A('ichoron', '192.168.239.90'),
  A('gulftown', '192.168.239.250')
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
  PTR('143', 'biggs.radoncanyon.com.'),
  PTR('144', 'wedge.radoncanyon.com.'),
  PTR('1', 'gw-astoria.radoncanyon.com.'),
  PTR('2', 'ns2.radoncanyon.com.')
);

// Astoria VLAN STORAGE
D(REV('192.168.220.0/24'), REG_NONE, DnsProvider(DNS_BIND),
  PTR('149', 'nas1-storage.radoncanyon.com.'),
  PTR('114', 'nas2-storage.radoncanyon.com.')
);
