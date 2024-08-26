# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Run the Vite preview server with the port configuration
CMD ["npx", "vite", "preview", "--port", "8080"]
