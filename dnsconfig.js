/*
   dnsconfig.js: dnscontrol configuration file for Desert Bluffs.
*/

DEFAULTS({'ns_ttl': '21600', 'cloudflare_proxy_default': 'off'});

// Providers:

var REG_NONE = NewRegistrar('none', 'NONE')
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD');
var R53 = NewDnsProvider('r53', 'ROUTE53');
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

// Domains:

D("desertbluffs.com", REG_NONE, DnsProvider(R53, 2), DnsProvider(GCLOUD, 2),
  A('@', '173.68.64.113', TTL('6h')),
  A('unifi', '165.227.124.32', TTL('6h')),
  CAA("@", "iodef", "mailto:sslabuse@desertbluffs.com"),
  CAA("@", "issue", "letsencrypt.org"),
  CAA("@", "issuewild", "letsencrypt.org"),
  CNAME('a', 'desertbluffs.com.', TTL('12h')),
  CNAME('b', 'desertbluffs.com.', TTL('12h')),
  CNAME('c', 'desertbluffs.com.', TTL('12h')),
  CNAME('d', 'desertbluffs.com.', TTL('12h')),
  CNAME('e', 'desertbluffs.com.', TTL('12h')),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.', TTL('12h')),
  CNAME('f', 'desertbluffs.com.', TTL('12h')),
  CNAME('g', 'desertbluffs.com.', TTL('12h')),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.', TTL('12h')),
  CNAME('h', 'desertbluffs.com.', TTL('12h')),
  CNAME('hypnotoad', 'hypnotoad.desertbluffs.com.s3-website-us-east-1.amazonaws.com.', TTL('12h')),
  CNAME('i', 'desertbluffs.com.', TTL('12h')),
  CNAME('j', 'desertbluffs.com.', TTL('12h')),
  CNAME('k', 'desertbluffs.com.', TTL('12h')),
  CNAME('l', 'desertbluffs.com.', TTL('12h')),
  CNAME('m', 'desertbluffs.com.', TTL('12h')),
  CNAME('n', 'desertbluffs.com.', TTL('12h')),
  CNAME('o', 'desertbluffs.com.', TTL('12h')),
  CNAME('p', 'desertbluffs.com.', TTL('12h')),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.', TTL('12h')),
  CNAME('q', 'desertbluffs.com.', TTL('12h')),
  CNAME('r', 'desertbluffs.com.', TTL('12h')),
  CNAME('s', 'desertbluffs.com.', TTL('12h')),
  CNAME('speedtest', 'desertbluffs.com.', TTL('12h')),
  CNAME('t', 'desertbluffs.com.', TTL('12h')),
  CNAME('u', 'desertbluffs.com.', TTL('12h')),
  CNAME('v', 'desertbluffs.com.', TTL('12h')),
  CNAME('w', 'desertbluffs.com.', TTL('12h')),
  CNAME('x', 'desertbluffs.com.', TTL('12h')),
  CNAME('y', 'desertbluffs.com.', TTL('12h')),
  CNAME('z', 'desertbluffs.com.', TTL('12h')),
  CNAME('zb14086362', 'zmverify.zoho.com.'),
  MX('@', 10, 'mx.zoho.com.', TTL('12h')),
  MX('@', 20, 'mx2.zoho.com.', TTL('12h')),
  TXT('@', "v=spf1 mx include:zoho.com ~all", TTL('12h')),
  TXT('_amazonses', "nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU=", TTL('12h')),
  TXT('_keybase', "keybase-site-verification=Lct-frBpniq-ggU6A97Vv1gyRhB_jOzHfIeigdRr2zs", TTL('12h')),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB', TTL('12h'))
);

D("radoncanyon.com", REG_NONE, DnsProvider(R53, 2), DnsProvider(GCLOUD, 2),
  A('nas1', '192.168.222.149', TTL('6h')),
  A('nas1-ipmi', '192.168.222.148', TTL('6h')),
  A('nas2', '192.168.222.114', TTL('6h')),
  A('nas2-ipmi', '192.168.222.113', TTL('6h')),
  A('cecil', '192.168.222.103', TTL('6h')),
  A('biggs', '192.168.222.143', TTL('6h')),
  A('wedge', '192.168.222.144', TTL('6h')),
  A('wg-ev', '192.168.239.2', TTL('6h')),
  A('wg-astoria', '192.168.222.2', TTL('6h')),
  A('gw-ev', '192.168.239.1', TTL('6h')),
  A('gw-astoria', '192.168.222.1', TTL('6h'))
);
