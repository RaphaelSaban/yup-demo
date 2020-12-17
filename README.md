# Demo project for Yup

## Installation

Clone the repository to your local environment.

```bash
npm install
```

## Run

First make sure you have a Postgresql server running (TODO: run an image from `docker-compose`)

```bash
# Tell the backend server how to connect to the database
export DATABASE_URL="postgres://user:password@localhost:5432/database_name"
# Run the servers
npm run start
```
