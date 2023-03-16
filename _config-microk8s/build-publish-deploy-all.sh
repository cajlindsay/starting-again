#! /bin/bash
scriptdir=`dirname $0`

# build all
/bin/bash $scriptdir/build-one-api.sh api-1
/bin/bash $scriptdir/build-one-api.sh api-2
/bin/bash $scriptdir/build-one-api.sh graphql-server 

/bin/bash $scriptdir/build-one-web.sh web-1
/bin/bash $scriptdir/build-one-web.sh web-2
/bin/bash $scriptdir/build-one-web.sh web-ts-graphql

# publish all
/bin/bash $scriptdir/publish-one.sh api-1
/bin/bash $scriptdir/publish-one.sh api-2
/bin/bash $scriptdir/publish-one.sh graphql-server 
/bin/bash $scriptdir/publish-one.sh mongo:latest

/bin/bash $scriptdir/publish-one.sh web-1
/bin/bash $scriptdir/publish-one.sh web-2
/bin/bash $scriptdir/publish-one.sh web-ts-graphql

# deploy all
kubectl delete pods --all