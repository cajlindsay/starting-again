instructions here:
https://microk8s.io/docs/install-wsl2

if snap daemon is out of date you may also have to do apt updates before the above:

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

to make it easier to use kubectl

```
sudo snap install kubectl
cd ~/
mkdir .kube
cd .kube
sudo microk8s config > config
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

The ingress by default hosts on port 80. Inside wsl you can curl http://localhost and get a response, but,
this is a problem where you are not able to see the website in your windows browser at http://localhost.
To get around this find the ip address that is exposed to the windows host by wsl. Do this with these commands:

```
sudo apt install net-tools
ifconfig
```

This will print all of the wsl network interfaces. Look for and try in your windows browser all of the ip addresses starting with '192.168...'. (mine was http://192.168.154.68)
