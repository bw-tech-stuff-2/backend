const db = require("../../database/dbConfig");

module.exports = {
  add,
  findRenter,
  findBy,
  findById,
};

function findRenter() {
  return db("renters").select("username", "password", "renterName")
}

function findBy(filter) {

  return db("renters").where(filter);
   
}

async function add(user) {
  try {
    const [id] = await db("renters").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("renters").where({ id }).first();
}