exports.up = function (knex) {
  return knex.schema
    .createTable("owners", (tbl) => {
      tbl.increments();
      tbl.string("username", 50).index().notNullable().unique();
      tbl.string("password", 20).notNullable();
      tbl.string("ownerName", 50).index().notNullable().unique();
    })
    .createTable("renters", (tbl) => {
      tbl.increments();
      tbl.string("username", 50).index().notNullable().unique();
      tbl.string("password", 20).notNullable();
      tbl.string("renterName", 50).index().notNullable().unique();
    })
    .createTable("tech", tbl => {
        tbl.increments();
        tbl.string("techItem").notNullable();
        tbl.string("seller").notNullable();
        tbl.integer("price").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("renters")
        .dropTableIfExists("owners")
};
