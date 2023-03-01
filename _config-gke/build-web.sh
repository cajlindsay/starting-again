#! /bin/bash
docker build -f _config-docker/Dockerfile.base -t starting-again-base:latest .
docker build -f _config-docker/Dockerfile.web --build-arg app=$1 --build-arg mode=feature -t gcr.io/starting-again-377302/$1:latest .
docker push gcr.io/starting-again-377302/$1:latest
