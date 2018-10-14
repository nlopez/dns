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
  A('unifi', '165.227.124.32', TTL('6h')),
  CAA('@', 'iodef', 'mailto:sslabuse@desertbluffs.com'),
  CAA('@', 'issue', 'letsencrypt.org'),
  CAA('@', 'issuewild', 'letsencrypt.org'),
  CNAME('*', 'astoria.port0.org.', TTL('1h')),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.', TTL('12h')),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.', TTL('12h')),
  CNAME('hypnotoad', 'hypnotoad.desertbluffs.com.s3-website-us-east-1.amazonaws.com.', TTL('12h')),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.', TTL('12h')),
  CNAME('zb14086362', 'zmverify.zoho.com.'),
  MX('@', 10, 'mx.zoho.com.', TTL('12h')),
  MX('@', 20, 'mx2.zoho.com.', TTL('12h')),
  TXT('@', 'v=spf1 mx include:zoho.com ~all', TTL('12h')),
  TXT('_amazonses', 'nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU=', TTL('12h')),
  TXT('_keybase', 'keybase-site-verification=Lct-frBpniq-ggU6A97Vv1gyRhB_jOzHfIeigdRr2zs', TTL('12h')),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB', TTL('12h'))
);

D('radoncanyon.com', REG_NONE, DnsProvider(DNS_BIND),
  A('nas1', '192.168.222.149'),
  A('nas1-storage', '192.168.220.149'),
  A('nas1-ipmi', '192.168.222.148'),
  A('nas2', '192.168.222.114'),
  A('nas2-storage', '192.168.220.114'),
  A('nas2-ipmi', '192.168.222.113'),
  A('cecil', '192.168.222.103'),
  A('kube-master', '192.168.222.103'),
  A('biggs', '192.168.222.143'),
  A('kube-node1', '192.168.222.143'),
  A('wedge', '192.168.222.144'),
  A('kube-node2', '192.168.222.143'),
  A('wg-ev', '192.168.239.2'),
  A('wg-astoria', '192.168.222.2'),
  A('gw-ev', '192.168.239.1'),
  A('gw-astoria', '192.168.222.1'),
  A('ns1', '192.168.239.2'),
  A('ns2', '192.168.222.2')
);
