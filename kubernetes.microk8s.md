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

# Useful stuff

Start microk8s:

```
sudo microk8s start
```

To make it easier to use kubectl:

```
sudo snap install kubectl
cd ~/
mkdir .kube
cd .kube
sudo microk8s config > config
```

To view the dashboard:

```
sudo microk8s dashboard-proxy
```

# Ingress

To enable the ingress feature:

```
sudo microk8s enable ingress
```

# Building docker images that microk8s can access

Registries are a pain in the arse so instead we can build an image and export it to the microk8s cache. Run these commands
in the root of the monorepo to build an api:

```
docker build -f Dockerfile.api --build-arg app=api-1 -t api-1 .
mkdir dist
docker save api-1 > dist/api-1.tar
sudo microk8s ctr image import dist/api-1.tar
```

or for a web:

```
docker build -f Dockerfile.web --build-arg app=web-1 --build-arg mode=k8slocal -t web-1 .
mkdir dist
docker save web-1 > dist/web-1.tar
sudo microk8s ctr image import dist/web-1.tar
```

Note that deployments will not automatically use the new image....you will need to delete existing pods first.

# Routing to match ingress configuration in k8s.yml

Add these lines to the /etc/hosts file. This will match the k8x.yml ingress configuration. Sometimes this resets
when your computer restarts so you may need to add these back if you cannot curl these URLs.

```
127.0.0.1    web-1.starting-again.info
127.0.0.1    web-2.starting-again.info
127.0.0.1    api.starting-again.info
```

The ingress by default hosts on port 80. Inside wsl you can curl http://web-1.starting-again.info and get a response, but,
this is a problem where you are not able to see the website in your windows browser at http://web-1.starting-again.info.
To get around this, firstly find the ip address that is exposed to the windows host by wsl. Do this with these commands:

```
sudo apt install net-tools
ifconfig
```

This will print all of the wsl network interfaces. Look for and try in your windows browser all of the ip addresses
starting with '192.168...' or ' 172.....'. It can change so you may need to do this sometimes when you restart.

When you have identified the correct ip address, update your WINDOWS HOST FILE (C:/windows/System32/drivers/etc/hosts)
with these lines:

```
192.168.154.68    web-1.starting-again.info
192.168.154.68    web-2.starting-again.info
192.168.154.68    api.starting-again.info
```
