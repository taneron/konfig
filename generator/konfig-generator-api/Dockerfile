FROM maven:3.8.6-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

FROM openjdk:11-jre-slim AS package
COPY --from=build /home/app/target/openapi-generator-api-1.0.0.jar /usr/local/lib/openapi-generator-api.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/openapi-generator-api.jar", "--add-opens=java.base/java.lang=ALL-UNNAMED", "--add-opens=java.base/java.util=ALL-UNNAMED"]