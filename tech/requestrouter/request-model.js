const db = require('../../database/dbConfig');

module.exports = {
    find,
    // findByRenter,
    findById,
    // add,
    update,
    // remove
}

function find() {
    return db('techRequest')
        .join('tech', 'techRequest.techId', 'tech.id')
        .join('renters', 'techRequest.rentersId', 'renters.id')
        .select('techRequest.id', 'tech.techItem', 'tech.techDescription', 'tech.owner', 'tech.price','techRequest.request', 'techRequest.rentersId', 'renters.username')
}

function update(updates, id) {
    return db('techRequest')
        .where({id})
        .update(updates);
}

function findById(id) {
    return db('techRequest')
    .join('tech', 'techRequest.techId', 'tech.id')
    .join('renters', 'techRequest.rentersId', 'renters.id')
    .select('techRequest.id', 'tech.techItem', 'tech.techDescription', 'tech.owner', 'tech.price', 'techRequest.request', 'techRequest.rentersId', 'renters.username')
        .where('techRequest.id', id)
        .first()
}
