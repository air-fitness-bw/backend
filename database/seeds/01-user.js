exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'admin',
          password: 'password',
          name: 'Indie Blount',
          email: 'myemail@gmail.com',
          role: 'instructor'
        },
        {
          id: 2,
          username: 'Fredruns',
          password: 'rrii$wGPow',
          name: 'Fred Quick',
          email: 'RunsQuick@yahoo.com',
          role: 'instructor'
        }, 
        {
          id: 3,
          username: 'BestofTheBest',
          password: 'p0ssw0rd',
          name: 'Archer Sanchez',
          email: 'aocforpresident@gmail.com',
          role: 'client'
        },
        {
          id: 4,
          username: 'largebarrel',
          password: 'goathammer',
          name: 'Barely Lopez',
          email: 'BigGOAT@gmail.com',
          role: 'client'
        },
        {
          id: 5,
          username: 'Barry333',
          password: 'password1',
          name: 'Barry Block',
          email: '83b201_12n3@yahoo.com',
          role: 'client'
        },
        {
          id: 6,
          username: 'secretKim',
          password: '40012may5th',
          name: 'Kim Melon',
          email: 'melonykimmiekat@gmail.com',
          role: 'client'
        },
        {
          id: 7,
          username: 'level1stealtharcher',
          password: 'herokuwhy?',
          name: 'Jason Born',
          email: 'hiddenmail@gmail.com',
          role: 'client'
        }
        
      ]);
    });
};
