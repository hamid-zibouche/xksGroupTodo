# ===== ÉTAPE 1: BUILD =====
FROM eclipse-temurin:21-jdk-alpine AS build

# Répertoire de travail
WORKDIR /app

# Copier les fichiers Maven
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn

# Rendre Maven exécutable
RUN chmod +x mvnw

# Copier le code source
COPY src src

# Construire l'application (JAR)
RUN ./mvnw clean package -DskipTests

# ===== ÉTAPE 2: EXÉCUTION =====
FROM eclipse-temurin:21-jre-alpine

# Répertoire de travail
WORKDIR /app

# Copier le JAR depuis l'étape build
COPY --from=build /app/target/*.jar app.jar

# Exposer le port Spring Boot
EXPOSE 8080

# Variable d'environnement pour optimiser la JVM
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

# Health check simple
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/actuator/health || exit 1

# Commande pour démarrer l'application
CMD ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]