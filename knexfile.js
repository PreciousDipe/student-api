require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: process.env.DB_FILE || './students.db'
    },
    useNullAsDefault: true,
    debug: true
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:' // Use in-memory database for tests
    },
    useNullAsDefault: true
  }
};