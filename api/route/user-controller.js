const db = require('../../database/dbconfig');

module.exports = {
add,
find,
findBy,
findById
};

function find() {
return db('users').select('id', 'username', 'password','role','name','email');
}

async function findBy(username) {
    const [user] = await db('users').where('username', '=', username);
    return user
}

async function add(user) {
    const [id] = await db('users').returning('id').insert(user);

    return findById(id);
}

function findById(id) {
return db('users')
    .where({ id })
    .first();
}