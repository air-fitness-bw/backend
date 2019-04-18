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
          start_date:'Monday, April 2nd at 830am',
          schedule:'Every Monday and Tuesday at 830am',
          location:'In the vacant lot behind the Ralphs on 23rd street',
          zipcode:'33486',
          description:'Yoga for veteran of the armed forces',
          instructor_id: 1
        },
        {
          price: 45 ,
          name: 'Ro Sam Bo in the Morning',
          start_date:'Thursday, June 2nd 7am',
          schedule:'Every Thursday at 7am and 7pm',
          location:'In the vacant lot behind the Ralphs on 23rd street',
          zipcode:'33486',
          description:'Practice the ancient technique',
          instructor_id: 1
        },
        {
          price: 200 ,
          name: 'Run Photography lessons',
          start_date:'January 1st 10am',
          schedule:'Every Sunday Morning 8am',
          location:'Start at Beacon Ave',
          zipcode:'91210',
          description:'Go for a friendly run with expert paparazzi Fred Quick as we jog though the rich side of LA, make sure to bring your cameras!',
          instructor_id: 1
        },
      ]);
    });
};
