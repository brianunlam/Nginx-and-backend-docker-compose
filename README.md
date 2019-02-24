# Nginx-and-backend-docker-compose

This is a simple template for a production environment using nginx.
In the nginx_server/build you should put the build created by React build.
It will expose your server in port 80.
Every call to /api endpoint will be forwarded to the backend.
If you need it you can use the socket.io configuration too.
All the files are copied when you build, it´s not using mounting from folders.
If you want to mount folder, remove the copy commands in each Dockerfile and mount the folders in the docker-compose.yml.
