# Installation and authentication

1. Install gcloud sdk:

```
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-417.0.1-linux-x86_64.tar.gz
tar -xf google-cloud-cli-417.0.1-linux-x86_64.tar.gz
./google-cloud-sdk/install.sh
```

then close and reopen the terminal.

2. Authenticate with gcloud with the following command, and follow the instructions:

```
gcloud auth login --billing-project 01960E-2E6B11-46F100
```

3. Set the current project

```
gcloud config set project starting-again-377302
```

# Container registry setup

1. Identify the appropriate service account in the service accounts list

```
gcloud iam service-accounts list
```

The service account name that you want will look something like this:

```
foo-bar@starting-again-377302.iam.gserviceaccount.com
```

2. Using the service account name that you found, create a service account key

```
mkdir ~/service-account-keys
gcloud iam service-accounts keys create ~/service-account-keys/sa-private-key.json --iam-account <sa-name>
```

3. Activate the service account for use on your machine

```
gcloud auth activate-service-account <sa-name> --key-file ~/service-account-keys/sa-private-key.json
```

4. Configure docker with the service account

```
gcloud auth configure-docker
```

# Container registry useful commands

Push an image to the container registry

```
docker tag web-1 gcr.io/starting-again-377302/web-1
docker push gcr.io/starting-again-377302/web-1
```

# GKE setup

1. Install auth plugin for GKE

```
gcloud components install gke-gcloud-auth-plugin
```

2. Authenticate with GKE

```
gcloud container clusters get-credentials starting-again-cluster --region=australia-southeast1
```

3. Tell kubectl to use the GKE cluster as the current context

```
kubectl config use-context gke_starting-again-377302_australia-southeast1_starting-again-cluster
```

4. Confirm that the context has been set correctly

```
kubectl config current-context
```

should print out the GKE cluster context

# GKE useful commands

Get a list of all clusters

```
gcloud container clusters list
```

# Checking whether a service and deployment are working internally

1. List all services:

```
kubectl get services
```

Take note of the internal ip and port of the service that you wish to debug.

2. List pods

```
kubectl get pods
```

3. Using one of the pod names above, get a bash terminal inside the pod.

```
kubectl exec -it web-1-694c6d5796-zg7nm -- sh
```

4. You will probably need to install curl

```
apk add --no-cache curl
```

5. Use curl to call the service that you identified in step 1:

```
curl http://10.110.129.94:3000
```

If the service and port are running correctly you should see a valid response.
