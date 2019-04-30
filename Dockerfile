FROM node:9-alpine

LABEL name="Gesher Group Website"
LABEL version="0.0.1"

# Copy local project onto docker container
COPY . /website/

# Cd to the new directory inside the container
WORKDIR /website/

# Expose the container ports
EXPOSE 80 433

# Install project dependencies
RUN npm install

# Start the react app
CMD ["npm", "start"]