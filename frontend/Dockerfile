# ===== ÉTAPE 1: BUILD =====
FROM node:18-alpine AS build

# Répertoire de travail
WORKDIR /app

# Copier les fichiers package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Build de l'application React
RUN npm run build

# ===== ÉTAPE 2: SERVEUR =====
FROM nginx:alpine

# Copier les fichiers buildés vers Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Configuration simple pour React (SPA)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]