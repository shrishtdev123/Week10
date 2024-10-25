"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const { Pool } = require('pg');
// Create a pool instance
exports.pool = new Pool({
    user: 'postgres', // e.g., 'postgres'
    host: 'localhost', // or the address of your PostgreSQL server
    database: 'postgres', // e.g., 'mydb'
    password: 'psql1', // e.g., 'mypassword'
    port: 5432, // Default PostgreSQL port
});
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );
`;
// Execute the query to create the table
exports.pool.query(createTableQuery);
