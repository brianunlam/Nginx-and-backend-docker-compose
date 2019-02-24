FROM node:carbon

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY ./ ./

RUN npm install
RUN npm start



