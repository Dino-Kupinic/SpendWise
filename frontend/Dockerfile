ARG NODE_VERSION=18.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]