# WSL clock

Sometimes the wsl clock falls out of sync with the Windows clock. It often happens
when you lose a network conneciton. It can be fixed by restarting WSL:

```
wsl --shutdown
wsl
```
