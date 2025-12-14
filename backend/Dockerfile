# Stage 1 - Build
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /backend

COPY /taskhub-back/pom.xml .
RUN mvn dependency:go-offline

COPY /taskhub-back/src ./src
RUN mvn clean package -DskipTests

# Stage 2 - Runtime
FROM eclipse-temurin:21-jre-alpine
WORKDIR /backend

COPY --from=build /backend/target/*.jar app.jar

ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

