# WSL clock

Sometimes the wsl clock falls out of sync with the Windows clock. It often happens
when you lose a network conneciton. It can be fixed by restarting WSL:

```
wsl --shutdown
wsl
```

# Issues with wsl network connectivity

The following commands can resolve alot of common problems:

```
echo -e "[network]\ngenerateResolvConf = false" | sudo tee -a /etc/wsl.conf
sudo unlink /etc/resolv.conf
echo nameserver 1.1.1.1 | sudo tee /etc/resolv.conf
```

# Issues with wsl and docker desktop

As an alternative I am removing Docker Desktop and using docker installed in wsl instead, following instructions here:
https://dev.to/bowmanjd/install-docker-on-windows-wsl-without-docker-desktop-34m9

You may also have to do this:

```
rm -rf /var/snap/docker/179/run/docker.pid
```
