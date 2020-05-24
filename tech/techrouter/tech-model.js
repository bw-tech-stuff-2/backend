const db = require("../../database/dbConfig");

module.exports = {
  add,
  find,
//   findByOwner,
  findById,
//   update,
//   destroy
};

function add(tech) {
    return db('tech')
        .insert(tech, 'id')
        .then(id => {
            return findById(id);
        })
}

function find() {
    return db('tech')
        .join('owners', 'owners.id', 'tech.ownersId')
        .select('tech.id', 'tech.techItem', 'tech.techDescription', 'tech.owner', 'tech.price')
}

function findById(id) {
  return db('tech')
      .join('owners', 'owners.id', 'tech.ownersId')
      .select('tech.id', 'tech.techItem', 'tech.techDescription', 'tech.owner', 'tech.price')
      .where('tech.id', id)
      .first()
}