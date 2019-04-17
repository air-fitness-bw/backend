exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'admin',
          password: 'password',
          name: 'Indie Blount',
          email: 'myemail@gmail.com',
          role: 'instructor'
        },
        {
          username: 'Fredruns',
          password: 'rrii$wGPow',
          name: 'Fred Quick',
          email: 'RunsQuick@yahoo.com',
          role: 'instructor'
        }, 
        {
          username: 'BestofTheBest',
          password: 'p0ssw0rd',
          name: 'Archer Sanchez',
          email: 'aocforpresident@gmail.com',
          role: 'client'
        },
        {
          username: 'largebarrel',
          password: 'goathammer',
          name: 'Barely Lopez',
          email: 'BigGOAT@gmail.com',
          role: 'client'
        },
        {

          username: 'Barry333',
          password: 'password1',
          name: 'Barry Block',
          email: '83b201_12n3@yahoo.com',
          role: 'client'
        },
        {
          username: 'secretKim',
          password: '40012may5th',
          name: 'Kim Melon',
          email: 'melonykimmiekat@gmail.com',
          role: 'client'
        },
        {
          username: 'level1stealtharcher',
          password: 'herokuwhy?',
          name: 'Jason Born',
          email: 'hiddenmail@gmail.com',
          role: 'client'
        }
        
      ]);
    });
};
