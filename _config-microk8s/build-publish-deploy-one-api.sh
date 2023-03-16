#! /bin/bash
scriptdir=`dirname $0`

/bin/bash $scriptdir/build-one-api.sh $1
/bin/bash $scriptdir/publish-one.sh $1
/bin/bash $scriptdir/deploy-one.sh $1