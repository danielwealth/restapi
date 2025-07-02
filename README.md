# restapi
a simple RESTAPI
# 🧰 Express.js REST API — In-Memory Item Manager

A lightweight, beginner-friendly Express.js application for managing items using a simple in-memory array. Supports full CRUD operations (Create, Read, Update, Delete) with basic error handling and clean middleware setup.

---

## 🚀 Features

- `GET /` — Welcome route
- `GET /items` — Get all items
- `GET /items/:id` — Get item by ID
- `POST /items` — Create a new item
- `PUT /items/:id` — Update an item
- `DELETE /items/:id` — Delete an item
- Centralized error handling (400, 404, 500)
- Middleware-powered JSON parsing
- In-memory storage (no database required)

---

## 🛠 Installation

```bash
git clone https://github.com/yourusername/express-item-api.git
cd express-item-api
npm install

RUN THE APP
node app.js

SAMPLE REQUEST USING POSTMAN
POST /items
Content-Type: application/json
Body:
{
  "name": "My First Item"
}
UPDATE ITEM
PUT /items/1
Content-Type: application/json
Body:
{
  "name": "Updated Item Name"
}



