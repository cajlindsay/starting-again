#! /bin/bash
scriptdir=`dirname $0`

/bin/bash $scriptdir/build-api.sh api-1
/bin/bash $scriptdir/build-api.sh api-2
/bin/bash $scriptdir/build-api.sh graphql-server 

/bin/bash $scriptdir/build-web.sh web-1
/bin/bash $scriptdir/build-web.sh web-2
/bin/bash $scriptdir/build-web.sh web-ts-graphql