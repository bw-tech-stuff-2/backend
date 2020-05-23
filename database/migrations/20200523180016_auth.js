
exports.up = function(knex) {
    return knex.schema
    .createTable("owners", tbl => {
        tbl.increments();
        tbl.string('username', 50).index().notNullable().unique()
        tbl.string('password', 20).notNullable();
        tbl.string('ownerName', 200).index().notNullable().unique()
    })
  
};

exports.down = function(knex) {
  
};
