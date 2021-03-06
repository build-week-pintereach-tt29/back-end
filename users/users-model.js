const db = require('../database/db-config');

module.exports = {
    find,
    findBy,
    findById,
    add,
    updateUser,
    removeUser,
};

function find() {
    return db('users')
    .select("id", "username", "email")
    .orderBy("id")
};

function findBy(filter) {
    return db('users')
    .where(filter);
};

function findById(id) {
    return db('users')
    .where({ id })
    .first();
};

function add(user) {
    return db('users')
    .insert(user, "id")
    .then(ids => {
        const id = ids[0];

        return findById(id);
    })
    .catch(err => {
        console.log(err)
    });
};

function updateUser(id, changes) {
    return db('users')
    .where({ id })
    .update(changes)
};

function removeUser(id) {
    return db ('user')
    .where({ id })
    .del();
};