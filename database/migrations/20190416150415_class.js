exports.up = function(knex) {
    return knex.schema.createTable('class', c => {
    c.increments();
    c.integer('class_id').notNullable().unique();

    c.integer('price').notNullable();
    c.string('name', 255).notNullable();
    c.string('startDate', 100);
    c.string('schedule', 500); //lower this value later
    c.string('location',500);//lower this value later
    c.string('zipcode',10);//lower this value later
    c.string('description',500);
    c.integer('uses').notNullable();
    c.timestamps(true, true);
    c.integer('instructor_id').notNullable()
    .references("role")
    .inTable("users")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE"); //foreign key linking instructors to classes they have created
});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('class');
};
