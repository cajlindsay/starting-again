NOTE: NOT WORKING.....CAN'T GET INGRESS TO WORK

Start minikube

```
minikube start
```

Enable ingress add-on

```
minikube addons enable ingress
minikube addons enable ingress-dns
```

Verify ingress add-on has been installed

```
kubectl get pods -n ingress-nginx
```

Install kubectl

```
minikube kubectl -- get pods -A'
```

Dashboard

```
minikube dashboard
```

Build an image from local machine to minikube registry

```
minikube image build -f Dockerfile.api --build-opt=build-arg=app=api-1 -t api-1 .
```

This differs slightly from the docker build syntax, which is

```
docker build -f Dockerfile.api --build-arg app=api-1 -t api-1 .
```
