#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ blockchain@140.112.13.67:/var/www/cert.caece.net/public_html
echo "Deployment complete"