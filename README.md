
# RateMyJunglerBackend

A backend service for the RateMyJungler Project

## Setting up development environment

Navigate to the project folder in you terminal and run ```npm install```

## Project structure

1. `Models`: This folder contains the schema structure that is saved on the MongoDB database.
2. `Routes`: This folder contains the HTTP request methods
3. `Services`: This folder contains functionality that makes direct interactions with the database

## Available Scripts

### **`node app.js`**

Runs the app in development mode. The server can be accessible from http://localhostl:3001.

## Limitations

This project is reliant on accessing a private MongoDB database and Riot API, which both utilize private keys. Therefore, it is difficult for users to access data without explicit owner permission.
