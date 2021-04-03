#!/bin/bash
set -eux

wait-for-url() {
    timeout -s TERM 45 bash -c \
    'while [[ "$(curl -s -o /dev/null -L -w ''%{http_code}'' ${0})" != "200" ]];\
    do echo "Waiting for ${0}" && sleep 2;\
    done' ${1}
    echo "OK!"
    curl -I $1
}

cleanup() {
    cd openapi-docs && rm -rf .openapi-generator dist
}
"$@"