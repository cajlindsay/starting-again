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
microk8s stop
microk8s start
```

Configure kubectl to access the cluster:

```
cd ~/
mkdir .kube
cd .kube
microk8s config > config
```

# Update hosts file to match ingress configuration in microk8s.yml

Find the wsl ip address that is exposed to the windows host by wsl. Run this command in WINDOWS terminal:

```
wsl hostname -I
```

This will print the ip address for wsl. The ip address is likely to start with '172....'

Update your WINDOWS HOST FILE (C:/windows/System32/drivers/etc/hosts) and wsl host file (/etc/hosts) with
the following lines. Note that the ip address will be the one that you found above:

```
172.28.27.253   web-1.starting-again.info
172.28.27.253   web-2.starting-again.info
172.28.27.253   api.starting-again.info
```

# Build docker images and deploying to microk8s internal registry:

Registries are a pain in the arse so instead we can build images and export them to the microk8s internal registry. There are
a few different web and api projects in this monorepo....you will need to build all of them.

Run this script in the root of the monorepo to build, publish and deploy a single api:

```
./config_microk8s/build-publish-deploy-one-api.sh api-1
```

or for single web:

```
./config_microk8s/build-publish-deploy-one-web.sh web-1
```

or to  build, publish and deploy everything:
```
./config_microk8s/ 