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
