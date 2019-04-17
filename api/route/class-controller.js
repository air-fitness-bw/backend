const db = require('../../database/dbconfig');

module.exports = {
add,
find,
findBy,
findById
};

function find() {
return db('class').select('name', 'startDate','schedule','location','zipcode','description','uses','instructor_id');
}

function findBy(filter) {
return db('class').where(filter);
}

async function add(cl) {
const [id] = await db('class').insert(cl);

return findById(id);
}

function findById(id) {
return db('class')
    .where({ id })
    .first();
}