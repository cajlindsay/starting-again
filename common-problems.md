# WSL clock

Sometimes the wsl clock falls out of sync with the Windows clock. It often happens
when you lose a network conneciton. It can be fixed by restarting WSL:

```
wsl --shutdown
wsl
```

or running this command:

```
sudo hwclock --hctosys
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

# Playwright install deps fails in either wsl or docker

You may see an error like this:

```
Release file for http://archive.ubuntu.com/ubuntu/dists/jammy-updates/InRelease is not valid yet
```

This can be caused by the wsl system time drifting from the time on the host machine. It can be fixed on each occassion with this command:

```
sudo hwclock --hctosys
```

# vite proxy fails when starting a web app for the first time on local machine

This is really an unsolved issue but can be worked around by calling one of the apis, via the proxy, using curl. e.g.

```
curl http://localhost:5172/api-1
```

Note that this is just a workaround until I find a more robust solution.