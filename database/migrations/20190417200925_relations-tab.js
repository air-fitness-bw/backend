exports.up = function(knex, Promise) {
    return knex.schema.createTable('relation_table', table => {
        table.increments();
        table.integer('uses').defaultTo(10);
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table
            .integer('class_id')
            .unsigned()
            .references('id')
            .inTable('class')
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('relation_table');
};

