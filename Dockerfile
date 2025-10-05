# Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Dependencies installieren
COPY package*.json ./
RUN npm ci

# App builden
COPY . .
RUN npm run build

# Production Image
FROM nginx:alpine

# Built files kopieren
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx Config für SPA
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]