/*
   dnsconfig.js: dnscontrol configuration file for Desert Bluffs.
*/

// Providers:

var REG_NONE = NewRegistrar('none', 'NONE')
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD');
var R53 = NewDnsProvider('r53', 'ROUTE53');

// Domains:

D("desertbluffs.com", REG_NONE, DnsProvider(GCLOUD), DnsProvider(R53),
  A('@', '173.68.64.132', TTL(3600)),
  A('unifi', '165.227.124.32', TTL(3600)),
  CAA("@", "iodef", "mailto:sslabuse@desertbluffs.com"),
  CAA("@", "issue", "letsencrypt.org"),
  CAA("@", "issuewild", "letsencrypt.org"),
  CNAME('a', 'desertbluffs.com.', TTL(604800)),
  CNAME('b', 'desertbluffs.com.', TTL(604800)),
  CNAME('c', 'desertbluffs.com.', TTL(604800)),
  CNAME('d', 'desertbluffs.com.', TTL(604800)),
  CNAME('e', 'desertbluffs.com.', TTL(604800)),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.', TTL(86400)),
  CNAME('f', 'desertbluffs.com.', TTL(604800)),
  CNAME('g', 'desertbluffs.com.', TTL(604800)),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.', TTL(86400)),
  CNAME('h', 'desertbluffs.com.', TTL(604800)),
  CNAME('hypnotoad', 'hypnotoad.desertbluffs.com.s3-website-us-east-1.amazonaws.com.', TTL(604800)),
  CNAME('i', 'desertbluffs.com.', TTL(604800)),
  CNAME('j', 'desertbluffs.com.', TTL(604800)),
  CNAME('k', 'desertbluffs.com.', TTL(604800)),
  CNAME('l', 'desertbluffs.com.', TTL(604800)),
  CNAME('m', 'desertbluffs.com.', TTL(604800)),
  CNAME('n', 'desertbluffs.com.', TTL(604800)),
  CNAME('o', 'desertbluffs.com.', TTL(604800)),
  CNAME('p', 'desertbluffs.com.', TTL(604800)),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.', TTL(86400)),
  CNAME('q', 'desertbluffs.com.', TTL(604800)),
  CNAME('r', 'desertbluffs.com.', TTL(604800)),
  CNAME('s', 'desertbluffs.com.', TTL(604800)),
  CNAME('speedtest', 'desertbluffs.com.', TTL(604800)),
  CNAME('t', 'desertbluffs.com.', TTL(604800)),
  CNAME('u', 'desertbluffs.com.', TTL(604800)),
  CNAME('v', 'desertbluffs.com.', TTL(604800)),
  CNAME('w', 'desertbluffs.com.', TTL(604800)),
  CNAME('x', 'desertbluffs.com.', TTL(604800)),
  CNAME('y', 'desertbluffs.com.', TTL(604800)),
  CNAME('z', 'desertbluffs.com.', TTL(604800)),
  CNAME('zb14086362', 'zmverify.zoho.com.'),
  MX('@', 10, 'mx.zoho.com.', TTL(86400)),
  MX('@', 20, 'mx2.zoho.com.', TTL(86400)),
  TXT('@', "v=spf1 mx include:zoho.com ~all", TTL(86400)),
  TXT('_amazonses', "nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU=", TTL(86400)),
  TXT('_keybase', "keybase-site-verification=Lct-frBpniq-ggU6A97Vv1gyRhB_jOzHfIeigdRr2zs", TTL(86400)),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB', TTL(86400))
)

