exports.up = function(knex) {
    return knex.schema.createTable('class', c => {
    c.increments();

    c.decimal('price').notNullable();
    c.string('name', 255).notNullable();
    c.date("start_date").notNullable();
    c.string('schedule', 255);
    c.string('location', 255);
    c.string('zipcode',10);
    c.string('description', 255);
    c.timestamps(true, true);
    c.integer('instructor_id').notNullable()
    .references("id")
    .inTable("users")
    .onDelete("CASCADE")
    .onUpdate("CASCADE"); //foreign key linking instructors to classes they have created
});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('class');
};
