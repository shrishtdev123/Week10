import { pool } from "./Utils";

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
`;

const createTodoQuery=`
             CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    done BOOLEAN DEFAULT FALSE
);

`;

// Execute the query to create the table
//pool.query(createTableQuery);
pool.query(createTodoQuery);