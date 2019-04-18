exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relation_table')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('relation_table').insert([
        { user_id: 1, class_id: 1, uses: 10 },
        { user_id: 1, class_id: 2, uses: 10 },
        { user_id: 1, class_id: 3, uses: 10 }
      ]);
    });
};
