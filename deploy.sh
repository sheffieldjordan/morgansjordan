#!/bin/sh

echo "[+] Switching to branch main"
git checkout main

echo "[+] Building app"
npm run build

echo "[+] Deploying files to server"
rsync -avP -e "ssh -i $HOME/.ssh/id_rsamorgansjordan" build/ morgan@139.162.139.191:/var/www/morgansjordan.com/
echo "Deployment complete"
