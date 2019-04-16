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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); }
    },
    migrations: {
      tableName: 'knex_migrations'
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
