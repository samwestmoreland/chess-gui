# Use an official web server image as the base image
FROM nginx:latest

# Copy your index.html file to the default web server directory
COPY public/ /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start the web server when the container runs
CMD ["nginx", "-g", "daemon off;"]
