############################################################
# Dockerfile to build Nginx Installed Containers
# Based on Ubuntu
############################################################

# Set the base image to Ubuntu
FROM ubuntu

# File Author / Maintainer
MAINTAINER Maintaner Name

# Install Nginx

# Add application repository URL to the default sources

# Update the repository
RUN apt-get update

# Install necessary tools
RUN apt-get install -y vim curl dialog net-tools

# Download and Install Nginx
RUN apt-get install -y nginx  

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD ./nginx.conf /etc/nginx/nginx.conf

# Here you copy the content of your build (from react) to the static folder on nginx
COPY ./build /usr/share/nginx/html


# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports


# Set the default command to execute
# when creating a new container
CMD service nginx start