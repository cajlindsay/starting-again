instructions here:
https://microk8s.io/docs/install-wsl2

may also have to do apt updates if snap is out of date:

```
sudo apt update
sudo apt upgrade
```

then exit wsl, shutdown wsl and restart wsl

```
exit
wsl --shutdown
wsl
```

to make it easier to use the already installed kubectl

```
cd ~/
mkdir .kube
cd .kube
microk8s config > config
```

view dashboard

```
sudo microk8s dashboard-proxy
```

enable ingress

```
sudo microk8s enable ingress
```

registries are a pain in the arse so instead we can build an image and export it to the microk8s cache

```
docker build -f Dockerfile.api --build-arg app=api-1 -t api-1 .
docker save api-1 > api-1.tar
sudo microk8s ctr image import api-1.tar
```
