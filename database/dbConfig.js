const knex = require("knex");

const knexconfig = require("../knexfile.js");
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexconfig[environment]);

// ('development') this will break postman, but needed for testing