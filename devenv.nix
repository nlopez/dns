{ pkgs, ... }:

{
  packages = [
    pkgs.dnscontrol
  ];

  enterShell = ''
    echo "dnscontrol $(dnscontrol version)"
  '';
}
