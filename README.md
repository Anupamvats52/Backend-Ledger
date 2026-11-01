# Backend-Ledger

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

## How Transactions Work

1. The user sends a transaction request (credit or debit).
2. The request is authenticated and validated.
3. The account balance is checked and updated.
4. A ledger entry is recorded to keep a consistent, traceable history.
5. The response is returned with the transaction details.
