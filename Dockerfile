# Stage 1: Build the React app with Vite
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project using Vite
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy Nginx configuration file (optional, if you have a custom config)
# COPY nginx.conf /etc/nginx/nginx.conf

# Remove the default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy the built app from the previous stage to Nginx's default folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
