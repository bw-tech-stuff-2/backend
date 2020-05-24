const db = require("../../database/dbConfig");

module.exports = {
  add,
  find,
  findByOwner,
  findById,
  update,
  destroy
};

function add(tech) {
    return db('tech')
        .insert(tech, 'id')
        .then(id => {
            return findById(id);
        })
}