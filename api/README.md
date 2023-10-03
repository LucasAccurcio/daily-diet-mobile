# Daily Diet API

## [Versão em Português](README-pt.md)

## Description

Daily Diet is a RESTful API designed to manage daily meals and track caloric intake. It provides functionalities for user authentication, meal creation, editing, and deletion.

## Technologies

- Node.js
- Express
- Prisma
- PostgreSQL
- JWT for authentication
- Swagger for API documentation
- bcrypt for password hashing

## Application Flow Diagram

![Application Flow Diagram](./assets/diagrama_fluxo.svg)


## Database Diagram

![Database Diagram](./assets/database_diagram.svg)


## Local Setup

### Prerequisites

- Node.js
- PostgreSQL

### Steps

1. Clone the repository:

   ```bash
  git clone https://github.com/your-username/daily-diet.git

2. Navigate to the project directory:

  ```bash
  cd api

3. Install dependencies:

  ```bash
  npm install

4. Create a .env file and add your database credentials:

  ```env
  DATABASE_URL="postgresql://username:password@localhost:5432/mydb"
  JWT_SECRET="your-secret-key"

5. Run database migrations:

  ```bash
  prisma migrate dev --name init

6. Start the server:

  ```bash
  npm run dev

## Running the Application

1. To start the application, run `npm run start`.
2. The API will be available at `http://localhost:3000/api`.

## API Documentation

You can access the API documentation via Swagger at `http://localhost:3000/api-docs`.
