require('dotenv').config();
const localPg ={
  host: 'localhost',
  database: 'dev',
  user: 'admin',
  password:'fitness'
}
const productionDbConnection = process.env.DATABASE_URL || localPg;
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.sqlite3'
    },
      useNullAsDefault: true, 
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      }
  },

  production: {
    client: 'pg',
    connection: productionDbConnection, // connection with DATABASE_URL
    pool: {
      min: 2,
      max: 10,
    },
      useNullAsDefault: true, 
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      }
  }

};
