const db = require("../../database/dbConfig");

module.exports = {
  find,
//   findByOwner,
  findById,
  add,
  update,
  destroy
};



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

function add(tech) {
  return db('tech')
      .insert(tech, 'id')
      .then(id => {
          return findById(id);
      })
}

function update(updates, id) {
  return db('tech')
      .where({id})
      .update(updates);
}

function destroy(id) {
  return db('tech')
      .where({id})
      .del();
}