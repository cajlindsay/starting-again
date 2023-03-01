#! /bin/bash
docker build -f _config-docker/Dockerfile.base -t starting-again-base:latest .
docker build -f _config-docker/Dockerfile.web --build-arg app=$1 --build-arg mode=k8slocal -t $1 .
mkdir -p dist
docker save $1 > dist/$1.tar
microk8s ctr image import dist/$1.tar