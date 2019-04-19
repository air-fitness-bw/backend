exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relation_table')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('relation_table').insert([
        { user_id: 1, class_name: 'Combat Yoga', uses: 10 },
        { user_id: 1, class_name: 'Ro Sam Bo in the Morning', uses: 10 },
        { user_id: 1, class_name: 'Photography Jog', uses: 10 }
      ]);
    });
};
