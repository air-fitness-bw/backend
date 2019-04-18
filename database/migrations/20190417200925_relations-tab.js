exports.up = function(knex, Promise) {
    return knex.schema.createTable('relation_table', table => {
    table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
    table
        .integer('class_id')
        .unsigned()
        .references('id')
        .inTable('class');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('relation_table');
};

