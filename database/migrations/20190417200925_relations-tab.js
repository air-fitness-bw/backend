exports.up = function(knex) {
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
            .string('class_name')
            .unsigned()
            .references('name')
            .inTable('name')
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('relation_table');
};

