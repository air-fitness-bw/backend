exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('class').insert([
        {
          price: 30 ,
          name: 'Combat Yoga',
          start_date:'2019/04/19',
          schedule:'Every Monday and Tuesday at 830am',
          location:'In the vacant lot behind the Ralphs on 23rd street',
          zipcode:'33486',
          description:'Yoga for veteran of the armed forces',
          instructor_id: 1
        },
        {
          price: 45 ,
          name: 'Ro Sam Bo in the Morning',
          start_date:'2019/04/22',
          schedule:'Every Thursday at 7am and 7pm',
          location:'In the vacant lot behind the Ralphs on 23rd street',
          zipcode:'33486',
          description:'Practice the ancient technique',
          instructor_id: 1
        },
        {
          price: 200 ,
          name: 'Photography Jog',
          start_date:'2019/04/30',
          schedule:'Every Sunday Morning 8am',
          location:'Start at Beacon Ave',
          zipcode:'91210',
          description:'Go for a friendly run with expert paparazzi Fred Quick as we jog though the rich side of LA, make sure to bring your cameras!',
          instructor_id: 1
        },
      ]);
    });
};
