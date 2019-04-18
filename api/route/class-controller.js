const db = require("../../database/dbconfig");

module.exports = {
    getClass,
    getClassById,
    addCl,
    updateClass,
    deleteClass,
    getInstructorClasses,
    getClientClasses,
};

async function getClass() { 
    const classes = await db("class");
    return classes;
}

async function getClassById(id) {
    const c = await db("class")
    .where('id', '=', id)
    .first();

    return c;
}

async function addCl(data) {
    console.log('data', data)
    const newData = {
        ...data, 
        price: Number(data.price),
        instructor_id: Number(data.instructor_id)
    };
    console.log('newData', newData)

    const [id] = await db("class")
        .insert(newData)
        .returning('id');
    console.log(id);

    const newClass = await getClassById(id);
    return newClass;
}

async function getInstructorClasses(id) {
    const classes = await db('class').where('instructor_id', '=', id)
    return classes
}

async function getClientClasses(id) {
    const classes = await db('class').where(' client_id', '=', id)
    return classes
}

async function updateClass(id, changes) {
    const update = await db("class")
        .where({ id })
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