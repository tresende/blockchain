FROM java:latest
ENV PORT=8080
WORKDIR /app
COPY eleicoesonline.war /app
COPY webapp-runner.jar /app
RUN echo "$mysql"
ENTRYPOINT java -Dspring.datasource.url='jdbc:mysql://mysql' -Dspring.datasource.username=root -Dspring.datasource.password=  -jar webapp-runner.jar --port 8080 --expand-war eleicoesonline.war
EXPOSE $PORT