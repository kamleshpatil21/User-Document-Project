<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 📄 User Document Management API

A secure and scalable RESTful API built with **NestJS** for managing user documents, integrated with Swagger for API documentation, CORS and security middleware, and rate limiting.

---

## 🚀 Features

- NestJS architecture for modular development
- Swagger UI for API documentation
- Global validation using DTOs
- Helmet for securing HTTP headers
- Rate limiting to prevent abuse
- CORS enabled with environment-based configuration

---

## 📦 Tech Stack

- **Framework:** NestJS (Node.js + Express)
- **Security:** Helmet, Rate Limit
- **Validation:** class-validator + class-transformer
- **Docs:** Swagger (OpenAPI)
- **Environment Config:** dotenv

---

## 🛠️ Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm or yarn
- Git

---

### 1. Clone the Repository


git clone https://github.com/<your-username>/user-document-management.git

cd user-document-management


### 2. Install Dependencies

npm install
# or
yarn install
### 3. Set Environment Variables
Create a .env file in the root directory:

### env

PORT=3000
ALLOWED_ORIGINS=http://localhost:3000

### 4. Run the Application

### Development
npm run start:dev

### Production
npm run build

npm run start:prod

🔐 Security Features

Helmet: Secures HTTP headers.

Rate Limiting: Limits requests to prevent abuse (100 requests per 15 minutes).

CORS: Restricts access to defined origins (set in .env).

🔎 API Documentation
Once the app is running, access Swagger UI at:


http://localhost:<PORT>/api

### 🌍 Deployment

You can deploy the project on:

Render

Heroku

Vercel (via serverless)

Docker + Any Cloud Provider

Ensure you:

Set your .env in production

Allow necessary CORS origins

Map correct port (usually 3000)

🐙 Pushing to GitHub
Step-by-step:

# Initialize git repo (if not already)
git init

### Add remote origin
git remote add origin https://github.com/<your-username>/user-document-management.git

### Add and commit changes
git add .
git commit -m "Initial commit"

### Set branch and push
git branch -M main
git push -u origin main


