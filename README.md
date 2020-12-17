# Demo project for Yup.

## Installation

First make sure you have a Postgresql server running (TODO: run an image from `docker-compose`)

After cloning the repository, run:

```bash
# Tell the backend server how to connect to the database
export DATABASE_URL="postgres://user:password@localhost:5432/database_name"
# Run the servers
npm run start
```
