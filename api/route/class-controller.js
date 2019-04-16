const db = require('../../database/dbconfig');

module.exports = {
add,
find,
findBy,
findById
};

function find() {
return db('class').select('class_id', 'username', 'password', 'startDate','schedule','location','zipcode','description','uses','instructor_id');
}

function findBy(filter) {
return db('class').where(filter);
}

async function add(user) {
const [id] = await db('class').insert(user);

return findById(id);
}

function findById(id) {
return db('class')
    .where({ id })
    .first();
}