#! /bin/sh

apt update
apt install -y certbot python3-certbot-nginx
certbot --nginx -n -d example.com -d www.example.com --agree-tos -m certi@certi.org.br