const db = require("../../database/dbConfig");

module.exports = {
  add,
  findOwner,
  findBy,
  findById,
};

function findOwner() {
  return db("owners").select("id", "username", "password", "ownerName", "email")
}

function findBy(filter) {

  return db("owners").where(filter);
   
}

async function add(user) {
  try {
    const [id] = await db("owners").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("owners").where({ id }).first();
}