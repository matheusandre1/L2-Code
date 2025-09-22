FROM maven:3.9.3-eclipse-temurin-17 AS build

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline

COPY src ./src

RUN mvn clean package -DskipTests


FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/exercicio2-horarios-de-aula.jar ./exercicio2-horarios-de-aula.jar


EXPOSE 8081

CMD ["java", "-jar", "exercicio2-horarios-de-aula.jar"]