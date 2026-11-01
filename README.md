# Banking Backend System

A real-world banking backend built with **Node.js** and **Express**. This project demonstrates how a production-style banking system is designed, covering authentication, account management, transactions, and ledger handling.

## Overview

The project shows how bank transactions flow end to end: how credit and debit operations are processed, and how ledgers keep data consistent across the system.

## Features

- **Authentication**: user registration and login with secure, token-based access
- **Account Management**: create and manage bank accounts
- **Transactions**: credit and debit operations with validation
- **Ledger Handling**: every transaction is recorded in a ledger to ensure data consistency and an auditable history
- **Backend Architecture**: clean, modular structure (routes, controllers, models, middleware)

## Tech Stack

- Node.js
- Express.js
- Database (e.g. MongoDB with Mongoose)
- JWT for authentication

## Project Structure

```
.
├── src
│   ├── config         # Database and environment configuration
│   ├── controllers    # Request handlers
│   ├── middleware     # Auth and error handling
│   ├── models         # Database schemas
│   ├── routes         # API routes
│   └── app.js         # Express app setup
├── server.js          # Entry point
├── .env.example
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- A running database instance (e.g. MongoDB)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_database_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the Server

```bash
# Development
npm run dev

# Production
npm start
```

The server will start at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint                | Description                  |
| ------ | ----------------------- | ---------------------------- |
| POST   | `/api/auth/register`    | Register a new user          |
| POST   | `/api/auth/login`       | Log in and receive a token   |
| POST   | `/api/accounts`         | Create a new account         |
| GET    | `/api/accounts`         | Get user's accounts          |
| POST   | `/api/transactions`     | Create a credit/debit entry  |
| GET    | `/api/transactions`     | List transactions            |
| GET    | `/api/ledger/:accountId`| View ledger for an account   |

> Update these endpoints to match your actual routes.

## How Transactions Work

1. The user sends a transaction request (credit or debit).
2. The request is authenticated and validated.
3. The account balance is checked and updated.
4. A ledger entry is recorded to keep a consistent, traceable history.
5. The response is returned with the transaction details.
