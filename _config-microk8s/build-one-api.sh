#! /bin/bash
docker build -f _config-docker/Dockerfile.base -t starting-again-base:latest .
docker build -f _config-docker/Dockerfile.api --build-arg app=$1 -t $1 .