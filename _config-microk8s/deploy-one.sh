#! /bin/bash
kubectl delete pods -l app=$1 --namespace starting-again