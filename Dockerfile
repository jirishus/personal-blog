# Multi-stage build for production
FROM node:20.19.0 AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install TypeScript if not in package.json
# RUN npm install -D typescript @types/react @types/react-dom

# Copy source code
COPY . .

# Build the app
RUN rm -rf dist && npm run build

# Production stage
FROM nginx:alpine

# Copy built app to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]