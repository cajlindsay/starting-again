# api build and dev server

What i want:

1. Local dev server to handle watching and restarting. I don't want to have to specify all directories/files to watch.
2. Loading of .env files is nice, especially when they can be combined/overridden the way that vite does it.

Attempt 1: Nodemon

1. Started with nodemon....pain in the arse.

Attempt 2: PM2

1. Let pm2 do the watching...not great because it only watches files and directories that you manually specify.
2. Does not load .env files at all.

Attempt 3: Vite

1. Watches the input file and the entire dependency tree...great!
2. Had problems making it work in both dev server and prod build. import.meta.env is not ideal
   for production as we would want to use the env variables provided in kubernetes configmap.
3. Tried a couple of plugins to get the above working...but to no avail.
4. Added a couple of lines to manually load env vars into process.env at development time.
5. Fuck! Now prod build works but some functionality (authorization) fails at runtime....tried old esbuild
   command and it works fine.
6. Now I have an inconsistent build approach for dev and prod...shit.

Attempt 4: esbuild

1. Tried to get esbuild dev server working but got nowhere. It does not seem to be able to serve an api...just static files.
2. Not going any further here....this sucks.

Attempt 5: node-dev

1. This works well...popular package too.
2. Use node-dev called from pm2 config for dev; use esbuild to build production package.

SOLVED: Attempt 5 is the best trade off for now.

# Issues with wsl network connectivity
The following commands can resolve alot of common problems:
```
echo -e "[network]\ngenerateResolvConf = false" | sudo tee -a /etc/wsl.conf
sudo unlink /etc/resolv.conf
echo nameserver 1.1.1.1 | sudo tee /etc/resolv.conf
```

# Issues with wsl and docker desktop
As an alternative I am trying to use docker installed in wsl, following instructions here:
https://dev.to/bowmanjd/install-docker-on-windows-wsl-without-docker-desktop-34m9
You may also have to do this:
```
rm -rf /var/snap/docker/179/run/docker.pid
```