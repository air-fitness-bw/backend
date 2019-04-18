const db = require("../../database/dbconfig");

module.exports = {
    getPunch,
    addPunch,
    updatePunch,
    deletePunch,

};

async function getPunch() { 
    const classes = await db("relation_table");
    return classes;
}

async function addPunch(data) {
    const [id] = await db('relation_table').returning('id').insert(data);

    return findById(id);
}

//function below is only called within this controller for updatePunch
async function getPunchesById(id) {
    const c = await db("relation_table")
    .where('id', '=', id)
    .first();

    return c;
}

async function updatePunch(id, changes) {
    const update = await db("relation_table")
        .where({ id })
        .update(changes);
    const putPunch = await getPunchesById(update)
    return putPunch;
}

async function deletePunch(id) {
    const deleted = await db("relation_table")
    .where({id })
    .del();

    return deleted;
}