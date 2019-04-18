const bcrypt = require('bcryptjs')

const hash = bcrypt.hashSync("password", 8);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'admin',
          password: hash,
          name: 'Indie Blount',
          email: 'myemail@gmail.com',
          role: 'instructor'
        }
      ]);
    });
};
