# Java 17 image
FROM eclipse-temurin:17-jdk

# App folder
WORKDIR /app

# Copy maven wrapper & pom
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Permission
RUN chmod +x mvnw

# Download dependencies (cache)
RUN ./mvnw dependency:go-offline

# Copy source
COPY src ./src

# Build app
RUN ./mvnw clean package -DskipTests

# Expose port
EXPOSE 8080

# Run app
CMD ["java", "-jar", "target/*.jar"]
