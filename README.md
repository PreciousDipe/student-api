# Project Overview
This project is a REST API for managing student records using Node.js and Express.js.

## Requirements
- Node v18+
- make

## Setup

1. Clone the repository:
   ```bash
   git clone <>
   cd student_api
   ```
2. Install Dependencies
    ```bash
    make install
    ```
3. Set up the database
    ```bash
    make migrate
    ```
4. Test the application
    ```bash
    make test
    ```
5. Run the application
    ```bash
    make run
    ```
### Project Structure
```bash

student-api/
├── index.js
├── knexfile.js
├── db.js
├── models/
│   └── student.js
├── routes/
│   └── students.js
├── migrations/
│   └── (migration files will be generated here)
├── tests/
│   └── students.test.js
├── .env
├── .gitignore
├── Makefile
└── README.md
```

### API Endpoints
- POST /api/v1/students: Create a student
- GET /api/v1/students: List all students
- GET /api/v1/students/:id: Get a student by ID
- PUT /api/v1/students/:id: Update a student
- DELETE /api/v1/students/:id: Delete a student
- GET /api/v1/healthcheck: Check API health

### Features and Best Practices

- **RESTful Design**: Uses standard HTTP methods and status codes.
- **Twelve-Factor App**:
  - **Codebase**: Single codebase in Git.
  - **Dependencies**: Declared in `package.json`.
  - **Config**: Stored in environment variables via `.env`.
  - **Backing Services**: SQLite as an attached resource, easily swappable.
  - **Processes**: Stateless server.
  - **Port Binding**: Configurable via `PORT`.
  - **Logs**: HTTP logs via Morgan.
- **Validation**: Ensures data integrity with Joi.
- **Testing**: Unit tests verify functionality.
- **Modularity**: Separates concerns (routes, models, database).


