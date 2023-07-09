## syntax=docker/dockerfile:1
#
## Comments are provided throughout this file to help you get started.
## If you need more help, visit the Dockerfile reference guide at
## https://docs.docker.com/engine/reference/builder/
#
ARG NODE_VERSION=18.16.0

# Use the official Node.js base image with the desired version
FROM node:${NODE_VERSION}-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue app for production
RUN npm run build

# Expose the desired port (e.g., 8080) to access the app
EXPOSE 8080

# Run the command to start the app
CMD [ "npm", "run", "dev" ]

