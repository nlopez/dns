// Providers

var REG_R53 = NewRegistrar('r53', 'ROUTE53');
var DSP_R53 = NewDnsProvider('r53', 'ROUTE53');
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare", 'CLOUDFLAREAPI');

// Domains

D('desertbluffs.com', REG_R53, DnsProvider(DSP_CLOUDFLARE), NO_PURGE,
  CF_PROXY_DEFAULT_ON,
  A('unifi', '68.183.136.131'),
  AAAA('unifi', '2604:a880:400:d1::81a:6001'),
  //CAA('@', 'iodef', 'mailto:sslabuse@desertbluffs.com', CAA_CRITICAL),
  //CAA('@', 'issue', 'letsencrypt.org'),
  //CAA('@', 'issuewild', 'letsencrypt.org'),
  CNAME('ec25ukpzz6h4nddab3jyevcnzmmmbrgm._domainkey', 'ec25ukpzz6h4nddab3jyevcnzmmmbrgm.dkim.amazonses.com.'),
  CNAME('gc4caluqqezmfk6xanwpdpw5eytglrkn._domainkey', 'gc4caluqqezmfk6xanwpdpw5eytglrkn.dkim.amazonses.com.'),
  CNAME('hypnotoad', 'hypnotoad.desertbluffs.com.s3-website-us-east-1.amazonaws.com.'),
  CNAME('lga1', 'desertbluffs.com.'),
  CNAME('ptusb247sybmwk4i32j5lmagtmtqq7qi._domainkey', 'ptusb247sybmwk4i32j5lmagtmtqq7qi.dkim.amazonses.com.'),
  CNAME('zb14086362', 'zmverify.zoho.com.'),
  CNAME('*', 'desertbluffs.com.'),
  MX('@', 10, 'mx.zoho.com.'),
  MX('@', 20, 'mx2.zoho.com.'),
  MX('@', 50, 'mx3.zoho.com.'),
  MX('ses', 10, 'feedback-smtp.us-east-1.amazonses.com.'),
  TXT('_amazonses', 'nOSqNz6GuHWUV/GdUWiXEWRTTRMK/ibv6afYRtn5WtU='),
  TXT('_dmarc', 'v=DMARC1; p=reject; pct=100; rua=mailto:itadso9z@ag.dmarcian.com'),
  TXT('@', 'v=spf1 mx include:zoho.com include:ses.desertbluffs.com ~all'),
  TXT('ses', 'v=spf1 include:amazonses.com ~all'),
  TXT('zoho._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIqHMhuUXI0KCxNVfkJpHSKVKqFFGi5zB2xmnvsz6tkKNSUHpDLUg2PXy3xkSep9V0XKMjD8zWSRcjFUCj/JB0d3WGdJ7RblrKDpMqkj4M8dWJPCkCrLFLw2ET6D2eCx0W/zrW1foAP/HcXv10QYiE5iOh+dUNHTyLFTHJzzVnoQIDAQAB')
);

D('radoncanyon.com', REG_R53, DnsProvider(DSP_R53),
  A('192.168.222.3.lga1', '192.168.222.3'),
  A('gw.lga1', '192.168.222.1'),
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
  A('ns1.lga1', '192.168.222.2'),
  A('wg.lga1', '192.168.222.2')
);

D('aethertrail.com', REG_R53, DnsProvider(DSP_R53),
  MX('@', 10, 'mail.protonmail.ch.'),
  MX('@', 20, 'mailsec.protonmail.ch.'),
  TXT('@', 'protonmail-verification=f1ab807d903a45b94591fa70864d795a030e118c'),
  TXT('@', 'v=spf1 include:_spf.protonmail.ch mx ~all'),
  TXT('_dmarc', 'v=DMARC1; p=none; rua=mailto:dmarc@aethertrail.com'),
  CNAME('protonmail._domainkey', 'protonmail._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail2._domainkey', 'protonmail2._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.'),
  CNAME('protonmail3._domainkey', 'protonmail3._domainkey.d37mwtwdoeonibgpu5jnsfnzrjnqm5p4ifgp2plkf5r4wkgmkrlha.domains.proton.ch.')
)

D('nulogorsk.com', REG_R53, DnsProvider(DSP_R53),
  TXT('@', 'google-site-verification=HsYPjjwyPCKuMfy6lxLKniooz4gHLAGWly1O6i8l6tw', TTL(3600) ),
  TXT('fts', 'google-site-verification=xbFJ6U6Ivneuq94IL2xwXYyKW9o3Nke0YJXOanj49mM')
)
