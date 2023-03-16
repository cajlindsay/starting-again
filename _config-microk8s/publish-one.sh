#! /bin/bash
mkdir -p dist
docker save $1 > dist/$1.tar
microk8s ctr image import dist/$1.tar