# 🎓 University Management Auth service API

A RESTful API built with **Express**, **Mongoose**, and **TypeScript** for managing university academic resources such as semesters, students, faculties, and more.

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Validation:** Zod
- **Error Handling:** Custom Global Error Handler
- **Logging:** Morgan (optional)
- **Development Tools:** Nodemon, ts-node-dev

---

## 📁 Folder Structure

---

## 🧪 API Endpoints

| Method | Endpoint                | Description                    |
| ------ | ----------------------- | ------------------------------ |
| GET    | `/api/v1/users`         | Get all users                  |
| POST   | `/api/v1/users`         | Create a new user              |
| DELETE | `/api/v1/semesters/:id` | Delete semester                |
| DELETE | `/api/v1/semesters/:id` | Delete semester                |
| DELETE | `/api/v1/semesters/:id` | Delete semester                |
| GET    | `/api/v1/semesters`     | Get all academic semesters     |
| POST   | `/api/v1/semesters`     | Create a new academic semester |
| GET    | `/api/v1/semesters/:id` | Get semester by ID             |
| PATCH  | `/api/v1/semesters/:id` | Update semester                |
| DELETE | `/api/v1/semesters/:id` | Delete semester                |

> 📝 Note: All endpoints are versioned under `/api/v1`.

---

## 🔐 Error Handling Format

All errors follow a consistent response format:

```json
{
  "success": false,
  "message": "Validation Error",
  "errorMessages": [
    {
      "path": "title",
      "message": "Title is required"
    }
  ],
  "stack": "Only in development mode"
}
```
