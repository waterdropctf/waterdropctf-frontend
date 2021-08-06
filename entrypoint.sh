#!/usr/bin/env bash
envsubst < /etc/nginx/conf.d/backend.conf.template > /etc/nginx/conf.d/backend.conf
nginx -g "daemon off;"
