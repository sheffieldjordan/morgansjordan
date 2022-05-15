#!/bin/sh

echo "[+] Switching to branch master"
git checkout master

echo "[+] Building app"
npm run build

echo "[+] Deploying files to server"
rsync -avP build/ morgan@http://139.162.139.191:/var/www/morgansjordan.com/
echo "Deployment complete"
