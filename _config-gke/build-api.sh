#! /bin/bash
docker build -f _config-docker/Dockerfile.base -t starting-again-base:latest .
docker build -f _config-docker/Dockerfile.api --build-arg app=$1 -t gcr.io/starting-again-377302/$1:latest .
docker push gcr.io/starting-again-377302/$1:latest
kubectl delete pods -l app=$1 --namespace starting-again