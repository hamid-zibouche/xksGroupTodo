# 📝 XKS Group Todo List

Application web full-stack pour la gestion de tâches développée avec React et Spring Boot.

## 🌐 Déploiement

L'application est déployée sur AWS et accessible à l'adresse :
**https://todoxks.hamid-zibouche.fr**

### Architecture de déploiement :
- **Serveur** : Instance AWS EC2
- **Reverse Proxy** : NGINX avec SSL (Let's Encrypt)
- **Frontend** : React servi dans un conteneur Docker
- **Backend** : Spring Boot API dans un conteneur Docker
- **Base de données** : H2 (intégrée)

## 🏗️ Technologies utilisées

### Frontend
- React 18
- JavaScript
- CSS3
- Docker + Nginx

### Backend  
- Spring Boot 3
- Java 21
- Maven
- H2 Database
- Docker

### DevOps
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- AWS EC2
- NGINX

## 🚀 Lancement local


### Étapes
1. **Cloner le projet**
   ```bash
   git clone https://github.com/hamid-zibouche/xksGroupTodo.git
   cd xksGroupTodo
   ```

2. **Lancer avec Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Accéder à l'application**
   - Frontend : http://localhost:3000
   - Backend API : http://localhost:8080
   - Health Check : http://localhost:8080/actuator/health

4. **Arrêter l'application**
   ```bash
   docker-compose down
   ```

## 📱 Fonctionnalités

- ✅ Ajouter des tâches
- ✅ Marquer comme terminé/non terminé
- ✅ Supprimer des tâches
- ✅ Interface responsive
- ✅ API REST documentée

## 🛠️ Développement

### Lancer en mode développement
```bash
# Backend
cd backend/todo
./mvnw spring-boot:run

# Frontend (dans un autre terminal)
cd frontend
npm start
```

## 👥 Équipe

Projet développé dans le cadre de l'évaluation technique XKS Group.

---
*Application déployée sur AWS avec Docker et NGINX*