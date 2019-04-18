const db = require("../../database/dbconfig");

module.exports = {
    getPunch,
    getClassById,
    addPunch,
    updateClass,
    deleteClass,

};

async function getPunch() { 
    const classes = await db("relation_table");
    return classes;
}

async function getClassById(id) {
    const c = await db("relation_table")
    .where({ id })
    .first();

    return c;
}

async function addPunch(data) {
    const [id] = await db('relation_table').returning('id').insert(data);

    return findById(id);
}

async function updateClass(id, changes) {
    const update = await db("relation_table")
        .where({ id })
        .update(changes);

    const putClass = await getClassById(update);

    return putClass;
}

async function deleteClass(id) {
    const deleted = await db("relation_table")
    .where({id })
    .del();

    return deleted;
}