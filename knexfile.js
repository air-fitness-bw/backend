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

  staging: {
    client: 'postgresql',
    connection: {
      database: 'dev_db',
      user:     'wxr',
      password: '%password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: productionDbConnection, // connection with DATABASE_URL
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); }
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
