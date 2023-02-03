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

Port forward to a running deployment

```
 kubectl port-forward deployment/api-1 3000:3000
```

Deploy a config file

```
kubectl apply -f k8s.yml
```

Set the default namespace

```
kubectl config set-context --current --namespace=starting-again
```
