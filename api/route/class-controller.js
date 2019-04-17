const db = require("../../database/dbconfig");

module.exports = {
    getClass,
    getClassById,
    addCl,
    updateClass,
    deleteClass,

};

async function getClass() { 
    const classes = await db("class");
    return classes;
}

async function getClassById(id) {
    const c = await db("class")
    .where({ id })
    .first();

    return c;
}

async function addCl(data) {
    const [id] = await db("class")
        .insert(data)
        .returning("name");

    const newClass = await getClassById(id);

    return newClass;
}

async function updateClass(id, changes) {
    const update = await db("class")
        .where({ insurer_id: id })
        .update(changes);

    const putClass = await getClassById(update);

    return putClass;
}

async function deleteClass(id) {
    const deleted = await db("class")
    .where({id })
    .del();

    return deleted;
}