exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
    user.increments();

    user.string('username', 128).notNullable().unique();
    user.string('password', 128).notNullable();
    user.string('name', 255).notNullable();
    user.string('email', 255).notNullable();
    user.string('role', 255).notNullable();
    user.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
