// pkcs12 as keystore (entire ssl: {...}):

"ssl": {
  "pfx": fs.readFileSync(__dirname+"selfsigned.pfx"),
  "passphrase":"<s3cretpsw0rd!>"
}
