# Installation

Initial instructions to install microk8s are here:
https://microk8s.io/docs/install-wsl2

Note that microk8s installs as a snap. If the snap daemon is out of date you may have to do apt updates first before
installing microk8s:

```
sudo apt update
sudo apt upgrade
```

After installing apt updates exit wsl, shutdown wsl and restart wsl

```
exit
wsl --shutdown
wsl
```

Install kubectl:

```
sudo snap install kubectl
```

Adjust microk8s group permissions for the commands in this document to work without sudo:

```
sudo usermod -a -G microk8s $USER
sudo chown -f -R $USER ~/.kube
newgrp microk8s
```

Enable add-ons:

```
microk8s enable ingress registry dashboard dns cert-manager
```

To make it easier to use kubectl:

```
cd ~/
mkdir .kube
cd .kube
microk8s config > config
```

# Useful stuff

Start microk8s:

```
sudo microk8s start
```

To view the dashboard:

```
microk8s dashboard-proxy
```

To update the entire cluster:

```
kubectl apply -f _config-kubernetes/microk8s.yml
```

# Routing to match ingress configuration in microk8s.yml

Find the ip address that is exposed to the windows host by wsl. Run this command in WINDOWS terminal:

```
wsl hostname -I
```

This will print the ip address for wsl. The ip address is likely to start with '172....'

Update your WINDOWS HOST FILE (C:/windows/System32/drivers/etc/hosts) and wsl host file (/etc/hosts) with these lines. Note that the ip address will be the one that you found above:

```
172.28.27.253   web-1.starting-again.info
172.28.27.253   web-2.starting-again.info
172.28.27.253   api.starting-again.info
```

# Building docker images and deploying to microk8s internal registry:

Registries are a pain in the arse so instead we can build an image and export it to the microk8s cache. Run this script in the root of the monorepo to build an api:

```
./docker-build-api.sh api-1
```

or for a web:

```
./docker-build-web.sh web-1
```

Note that deployments will not automatically use the new image....you will need to delete existing pods first.

# tls

Useful commands for working out why cert-manager is not issuing tls certificates:

```
kubectl get clusterissuer
kubectl get certificaterequests
kubectl get orders
kubectl get certificates
kubectl get challenges
kubectl get secrets
```
