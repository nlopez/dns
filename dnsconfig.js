// Providers

var REG_NONE = NewRegistrar('none');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare');
var DNS_DIGITALOCEAN = NewDnsProvider('digitalocean');
var DNS_BIND = NewDnsProvider("bind", {
  "default_soa": {
    "master": "ns1.radoncanyon.com.",
    "mbox": "dnsadmin.radoncanyon.com.",
    "refresh": 900,
    "retry": 900,
    "expire": 1800,
    "minttl": 60,
  },
  "default_ns": [
    "ns1.radoncanyon.com.",
  ]
})

// Domains

D('desertbluffs.com',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),
  CF_PROXY_DEFAULT_ON,
  IGNORE_NAME('lga1', 'A'),
  IGNORE_NAME('lga2', 'A'),
  ALIAS('@', 'lga1.desertbluffs.com.'),
  A('unifi', '68.183.136.131', CF_PROXY_OFF),
  AAAA('unifi', '2604:a880:400:d1::81a:6001', CF_PROXY_OFF),
  CAA('@', 'iodef', 'mailto:sslabuse@desertbluffs.com', CAA_CRITICAL),
  CAA('@', 'issue', 'letsencrypt.org'),
  CAA('@', 'issuewild', 'letsencrypt.org'),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.', CF_PROXY_OFF),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.', CF_PROXY_OFF),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.', CF_PROXY_OFF),
  CNAME('zb14086362', 'zmverify.zoho.com.', CF_PROXY_OFF),
  MX('@', 10, 'mx.zoho.com.'),
  MX('@', 20, 'mx2.zoho.com.'),
  MX('@', 50, 'mx3.zoho.com.'),
  TXT('@', 'v=spf1 mx include:zoho.com include:ses.desertbluffs.com ~all'),
  TXT('*', 'v=spf1 -all'),
  TXT('@', 'google-site-verification=NNYObey8Yje_tBPGc8bIsGlU5ii5KAePBJvDVGO2S9M'),
  MX('ses', 10, 'feedback-smtp.us-east-1.amazonses.com.'),
  TXT('_amazonses', 'nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU='),
  TXT('_dmarc', 'v=DMARC1; p=reject; pct=100; rua=mailto:itadso9z@ag.us.dmarcian.com'),
  TXT('ses', 'v=spf1 include:amazonses.com ~all'),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB'),
  CNAME('a', 'lga1.desertbluffs.com.'),
  CNAME('b', 'lga1.desertbluffs.com.'),
  CNAME('c', 'lga1.desertbluffs.com.'),
  CNAME('d', 'lga1.desertbluffs.com.'),
  CNAME('e', 'lga1.desertbluffs.com.', CF_PROXY_OFF),
  CNAME('f', 'lga1.desertbluffs.com.'),
  CNAME('g', 'lga1.desertbluffs.com.'),
  CNAME('h', 'lga1.desertbluffs.com.'),
  CNAME('i', 'lga1.desertbluffs.com.'),
  CNAME('j', 'lga1.desertbluffs.com.'),
  CNAME('k', 'lga1.desertbluffs.com.'),
  CNAME('l', 'lga1.desertbluffs.com.'),
  CNAME('m', 'lga1.desertbluffs.com.', CF_PROXY_OFF),
  CNAME('n', 'lga1.desertbluffs.com.'),
  CNAME('o', 'lga1.desertbluffs.com.'),
  CNAME('p', 'lga1.desertbluffs.com.'),
  CNAME('q', 'lga1.desertbluffs.com.'),
  CNAME('r', 'lga1.desertbluffs.com.'),
  CNAME('s', 'lga1.desertbluffs.com.'),
  CNAME('t', 'lga1.desertbluffs.com.'),
  CNAME('u', 'lga1.desertbluffs.com.'),
  CNAME('v', 'lga1.desertbluffs.com.'),
  CNAME('w', 'lga1.desertbluffs.com.'),
  CNAME('x', 'lga1.desertbluffs.com.'),
  CNAME('y', 'lga1.desertbluffs.com.'),
  CNAME('z', 'lga1.desertbluffs.com.'),
  CNAME('httpbin', 'lga1.desertbluffs.com.'),
  CNAME('nitter', 'lga1.desertbluffs.com.'),
  CNAME('fandom', 'lga1.desertbluffs.com.'),
  CNAME('login2', 'lga1.desertbluffs.com.'),
  CNAME('xn--st9h', 'lga1.desertbluffs.com.')
);

D('radoncanyon.com',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),
  CF_PROXY_DEFAULT_OFF,
  A('ns1', '192.168.239.2'),
  A('192.168.222.3.lga1', '192.168.222.3'),
  A('gw.lga1', '192.168.222.1'),
  A('gw.lga2', '192.168.239.1'),
  A('knode1.lga1', '192.168.222.143'),
  A('knode1-storage.lga1', '192.168.220.143'),
  A('knode2.lga1', '192.168.222.144'),
  A('knode2-storage.lga1', '192.168.220.144'),
  A('nas1.lga1', '192.168.222.149'),
  A('nas1-ipmi.lga1', '192.168.222.148'),
  A('nas1-storage.lga1', '192.168.220.149'),
  A('nas2.lga1', '192.168.222.114'),
  A('nas2-ipmi.lga1', '192.168.222.113'),
  A('nas2-storage.lga1', '192.168.220.114'),
  A('odroid.lga1', '192.168.222.2'),
  A('internal-nginx', '192.168.222.232'),
  A('shimmer.lga2', '192.168.239.34'),
  A('steamdock.lga2', '192.168.239.36'),
  A('avr.lga2', '192.168.239.253'),
  A('nswitch1.lga2', '192.168.239.156'),
  A('nswitch2.lga2', '192.168.239.48'),
  A('mammon.lga2', '192.168.239.11'),
  A('oolong.lga2', '192.168.239.231'),
  A('lg-c1.lga2', '192.168.239.15'),
  A('ddog.lga2', '192.168.239.33'),
  A('caldigit-eth.lga2', '192.168.239.14'),
  A('matisse.lga2', '192.168.239.211'),
  A('odroid.lga2', '192.168.239.2'),
  A('harmony-hub.lga2', '192.168.239.54'),
  A('wanderer.lga2', '192.168.239.27'),
  A('argus.lga2', '192.168.239.32'),
  A('medusa.lga1', '192.168.221.191'),
  TXT('@', 'google-site-verification=ZnkGcjiK9_Od1OOq6ZxMFzoS3Q7ZatXb8W_aH89g5mY'),
  // https://www.gov.uk/guidance/protect-domains-that-dont-send-email
  TXT('*', 'v=spf1 -all'),
  TXT('*._domainkey', 'v=DKIM1; p='),
  TXT('_dmarc', 'v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; fo=1; rua=mailto:itadso9z@ag.us.dmarcian.com'),
  MX('@', 0, '.')
);

D('aethertrail.com',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),
  CF_PROXY_DEFAULT_OFF,
  // Keep this for continued ProtonMail verification
  TXT('@', 'protonmail-verification=f1ab807d903a45b94591fa70864d795a030e118c'),
  MX('@', 10, 'mail.protonmail.ch.'),
  MX('@', 20, 'mailsec.protonmail.ch.'),
  TXT('@', 'v=spf1 include:_spf.protonmail.ch mx ~all'),
  TXT('*', 'v=spf1 -all'),
  TXT('@', 'google-site-verification=dvq0zeVnXreX-ORHQopNOs_c7T3fqdl5LAATDoL6miU'),
  CNAME('protonmail._domainkey', 'protonmail._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail2._domainkey', 'protonmail2._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail3._domainkey', 'protonmail3._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  TXT('_dmarc', 'v=DMARC1; p=quarantine; rua=mailto:itadso9z@ag.us.dmarcian.com')
)

D('nulogorsk.com',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),
  CF_PROXY_DEFAULT_OFF,
  // Keep this for continued ProtonMail verification
  TXT('@', 'protonmail-verification=95474329be7c5db7b13b98a1a7cf2a302dea3f57'),
  MX('@', 10, 'mail.protonmail.ch.'),
  MX('@', 20, 'mailsec.protonmail.ch.'),
  TXT('@', 'v=spf1 include:_spf.protonmail.ch mx ~all'),
  TXT('*', 'v=spf1 -all'),
  CNAME('protonmail._domainkey', 'protonmail.domainkey.dtq25ze44gqbgofgt2yteu67cedbavwyaszrouvla23bp3c2ltjuq.domains.proton.ch.'),
  CNAME('protonmail2._domainkey', 'protonmail2.domainkey.dtq25ze44gqbgofgt2yteu67cedbavwyaszrouvla23bp3c2ltjuq.domains.proton.ch.'),
  CNAME('protonmail3._domainkey', 'protonmail3.domainkey.dtq25ze44gqbgofgt2yteu67cedbavwyaszrouvla23bp3c2ltjuq.domains.proton.ch.'),
  TXT('_dmarc', 'v=DMARC1; p=quarantine; rua=mailto:itadso9z@ag.us.dmarcian.com'),
  TXT('@', 'google-site-verification=5812hCoCmKwaI_0BOxwDLgllxUt0Z1zF8xMVGpnJSJ4')
)
