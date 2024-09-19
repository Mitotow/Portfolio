#!/bin/bash

git pull
npm install
npm run build
podman build -f $(pwd)/Podmanfile -t portfolio-httpd
podman run --replace -d -it -p 8080:80 --name "webserver-portfolio" portfolio-httpd
