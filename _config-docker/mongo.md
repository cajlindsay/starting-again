1. Run ```docker-compose up``` from the _config-docker directory. A mongo container will start with the given admin root user name and password from the docker compose file.
2. In Studio3T, create a connection to localhost:27017 with auth database 'admin' and the username and password in the docker compose file.
3. Do some querying and stuff.