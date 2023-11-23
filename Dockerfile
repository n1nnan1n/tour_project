# Use an official Node.js runtime as the base image
FROM node:20.6.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your Express.js app listens on
EXPOSE 9000

# Define the command to start your Express.js app
CMD ["node", "server.js"]