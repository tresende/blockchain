#!/bin/bash
java -Dspring.datasource.url=jdbc:mysql://db/eleicaoonline_dev?createDatabaseIfNotExist=true -Dspring.datasource.username=root -Dspring.datasource.password=  -jar /app/webapp-runner.jar --port 8080 --expand-war /app/eleicoesonline.war &
nodemon /app/blockchain-api/index.js
