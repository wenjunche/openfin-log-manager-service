
// Example RSA key pair
// generated with
// openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
export const PRIVATE_KEY = 
`-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/S1Ma8BM1vciL
qSZRvqoJCMmwwl8XZ+jyZhnO4E8VS10MiLirHBsslX4OUTeaw60Uz1Ey1QXim1BM
JH+Z+eTCUjjQ5xfd+GITPBlEeoOl2XHKp/yzmOW5EsFkymovapghFidTekDTB38y
NVngiLoGdL8sNMVrymBP0UeSu2cZB2od9zhZKEivAffwBGEmnlz4P90K/7UuAIo9
E7X+SJurYYB4nWPG1VzDBf6UmX+e7/tr/E0hlVJhKEY1dYAggled+99DvY5fzwjy
nbtWzJsp60EI28PRfTLoCHnCXdBV+zrrZrhM3NS4tBlqWBzPQidCbIHOH8fHtMJ/
vcSA55EbAgMBAAECggEAEO3xpOiqSo9JOFL3+TQOiE4my2XoVIH1s74lepGPbisF
SR6weTQ7k26HgWzepuu6XaUbYoxHwQ5NxO9V+6KKBEiSjqplClf5FgqzkcPl8r+T
uoOzcZGOgxqN0wW28AtW+1ailFi1c/et4humoKB5Fiku4hKphiia7XVwCCRds3E1
W0nQDNnzTawW+KoJ6C/TKaPC62T1UBOJDbrdQk6CmddRBJ5IpZ52otYhOrMejMiw
ROaXwRTFpBmzeJvH3IM2+QoXG0FpGiBw9cDf7Vb3K9PuIYCLcecYtac8Sfk1KU3Q
vTFyYHShSZQkFfZcxNAwi2+EWylrTe6YCV+GZz1LwQKBgQDj37POeRE46Yh88JhV
xS1vfgYuYPa+2NdomDMKX5OpwkV+iSSz3NQu4QOZcRVy/riAjmK6YAbAxIWu/tuB
6ahi+LvubLf2a/td3E0KwKNX6/xqoz6EwBLXlMDb2urY/wCOH9lZcn01C8jURz2r
PwADwSf/fyq/z8QZXbdwD2Ih7wKBgQDW58om2DvHDHmg7E9UX/PH+9ydZj6aTbVD
fHNt86NtINCrmsHmeQz/N0ACO7Ah0PqF6xFsSD4eG8gJ3rY4dqCZW2d7X6ZqmV0+
DtGsx/9luQd34OfizM0cQ2R8TlAMD9+/utwhrqHuJLwOqpZDKrLlMuA8oPmwbXCS
44t1sJA/lQKBgQDbWSGu1ZFDdGEiy0IIBfaXhPsUN9gsm3S2xRMUoC320f+tLvx6
ek5xFb4uPNGF0TXu4aCdgQPfGQ0KB19q7W1eX8ofVt26QfVEQ2SRvh896fYe/CaZ
CH7ar+D5gQBhgw2YwYWp+XAW2NInrK/rIIi2FH+ZDGMtIiTEuhZyswwmVwKBgHDk
+zFEzsJWL172RQZSEcKw8MhO+fwdbmexbQIJx4SAhJ5hghMM7GL2J04FBRX+rlzD
jDeSC+/NMFze/mLTDrMBbW9GZCoDvxPmvQdDWUua0+2J3McsR2Pdk2Ap06tCe4xB
IXsgPjjYW2JpAt7uA2ScQWgYOJMSKt0/Y/fDdUOxAoGATCetNq9XF1D5HNplMT9Z
SXUG4wj/MeXqKeNi+vJurcjJDse6MbXIuxSMFS8yMv+c35AL62D0wD+Iq6Tbxson
STuCOBaTeigDSJfiwuPYtQDhbMX34d6GE9yC2Cc8hGMygLzSKyYZ7V4gWXi5nRgx
rInlzspDZVfeJJnJ3Pqo5Oo=
-----END PRIVATE KEY-----
`;

// extract public key with
// openssl rsa -pubout -in private_key.pem -out public_key.pem
export const PUBLIC_KEY =
`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv0tTGvATNb3Ii6kmUb6q
CQjJsMJfF2fo8mYZzuBPFUtdDIi4qxwbLJV+DlE3msOtFM9RMtUF4ptQTCR/mfnk
wlI40OcX3fhiEzwZRHqDpdlxyqf8s5jluRLBZMpqL2qYIRYnU3pA0wd/MjVZ4Ii6
BnS/LDTFa8pgT9FHkrtnGQdqHfc4WShIrwH38ARhJp5c+D/dCv+1LgCKPRO1/kib
q2GAeJ1jxtVcwwX+lJl/nu/7a/xNIZVSYShGNXWAIIJXnfvfQ72OX88I8p27Vsyb
KetBCNvD0X0y6Ah5wl3QVfs662a4TNzUuLQZalgcz0InQmyBzh/Hx7TCf73EgOeR
GwIDAQAB
-----END PUBLIC KEY-----`