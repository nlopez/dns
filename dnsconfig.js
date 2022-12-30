// Providers

var REG_NONE = NewRegistrar('none');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare');
var DNS_DIGITALOCEAN = NewDnsProvider('digitalocean');
var DNS_BIND = NewDnsProvider("bind", {
  "default_soa": {
    "master": "ns1.radoncanyon.com.",
    "mbox": "dnsadmin.radoncanyon.com.",
    "refresh": 3600,
    "retry": 600,
    "expire": 604800,
    "minttl": 1440,
  },
  "default_ns": [
    "ns1.radoncanyon.com.",
  ]
})

// Domains

D('desertbluffs.com',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),
  // DnsProvider(DNS_DIGITALOCEAN, 0),
  CF_PROXY_DEFAULT_OFF,
  NO_PURGE,
  IGNORE_NAME('lga1'),
  IGNORE_NAME('lga2'),
  ALIAS('@', 'lga1.desertbluffs.com.', CF_PROXY_ON),
  A('unifi', '68.183.136.131'),
  // AAAA('unifi', '2604:a880:400:d1::81a:6001'),
  CAA('@', 'iodef', 'mailto:sslabuse@desertbluffs.com', CAA_CRITICAL),
  CAA('@', 'issue', 'letsencrypt.org'),
  CAA('@', 'issuewild', 'letsencrypt.org'),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.'),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.'),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.'),
  CNAME('zb14086362', 'zmverify.zoho.com.'),
  CNAME('*', 'desertbluffs.com.', CF_PROXY_ON),
  MX('@', 10, 'mx.zoho.com.'),
  MX('@', 20, 'mx2.zoho.com.'),
  MX('@', 50, 'mx3.zoho.com.'),
  TXT('@', 'v=spf1 mx include:zoho.com include:ses.desertbluffs.com ~all'),
  MX('ses', 10, 'feedback-smtp.us-east-1.amazonses.com.'),
  TXT('_amazonses', 'nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU='),
  TXT('_dmarc', 'v=DMARC1; p=reject; pct=100; rua=mailto:itadso9z@ag.dmarcian.com'),
  TXT('ses', 'v=spf1 include:amazonses.com ~all'),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB')
);

D('radoncanyon.com',
  REG_NONE,
  DnsProvider(DNS_BIND, 0),
  A('ns1', '127.0.0.3'),
  A('192.168.222.3.lga1', '192.168.222.3'),
  A('gw.lga1', '192.168.1.1'),
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
  A('argus.lga2', '192.168.239.32')
);

D('aethertrail.com',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),
  DnsProvider(DNS_DIGITALOCEAN, 0),
  // Keep this for continued ProtonMail verification
  TXT('@', 'protonmail-verification=f1ab807d903a45b94591fa70864d795a030e118c'),
  MX('@', 10, 'mail.protonmail.ch.'),
  MX('@', 20, 'mailsec.protonmail.ch.'),
  TXT('@', 'v=spf1 include:_spf.protonmail.ch mx ~all'),
  CNAME('protonmail._domainkey', 'protonmail._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail2._domainkey', 'protonmail2._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail3._domainkey', 'protonmail3._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  TXT('_dmarc', 'v=DMARC1; p=quarantine; rua=mailto:dmarc@aethertrail.com')
)

D('nulogorsk.com',
  REG_NONE,
  DnsProvider(DNS_CLOUDFLARE),
  DnsProvider(DNS_DIGITALOCEAN, 0),
  // Keep this for continued ProtonMail verification
  TXT('@', 'protonmail-verification=95474329be7c5db7b13b98a1a7cf2a302dea3f57'),
  MX('@', 10, 'mail.protonmail.ch.'),
  MX('@', 20, 'mailsec.protonmail.ch.'),
  TXT('@', 'v=spf1 include:_spf.protonmail.ch mx ~all'),
  CNAME('protonmail._domainkey', 'protonmail.domainkey.dtq25ze44gqbgofgt2yteu67cedbavwyaszrouvla23bp3c2ltjuq.domains.proton.ch.'),
  CNAME('protonmail2._domainkey', 'protonmail2.domainkey.dtq25ze44gqbgofgt2yteu67cedbavwyaszrouvla23bp3c2ltjuq.domains.proton.ch.'),
  CNAME('protonmail3._domainkey', 'protonmail3.domainkey.dtq25ze44gqbgofgt2yteu67cedbavwyaszrouvla23bp3c2ltjuq.domains.proton.ch.'),
  TXT('_dmarc', 'v=DMARC1; p=quarantine; rua=mailto:dmarc@nulogorsk.com')
)
