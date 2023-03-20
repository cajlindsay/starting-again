# Setting up

```
npm run pw -- install chrome
npm run pw -- install-deps
```

# Running tests

```
npm run pw -- test
```

# View HTMl report

```
npm run pw -- show-report
```

# goals
- run locally consistently on different machines
- run on a build server
- extract report both locally and from a build server

# attempt 1
Run directly in node
- fast
- can run easily both locally and on build server
- report can be viewed easily and published to build output on a build server
- FAIL inconsistent results on different machines

# attempt 2
Run using act with a github action file
- FAIL slow because browser dependencies need to be reinstalled on every run
- can run both locally and on a build server
- consistent results
- FAIL unable to extract report

# attempt 3
Run with a base docker file
- need to create a base image that is accessible by all - both locally and from build server
- this should be fast
- should have more control to extract the report, either by mounting a volume or running the final container with a web server