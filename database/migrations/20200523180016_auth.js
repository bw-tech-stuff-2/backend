exports.up = function (knex) {
  return knex.schema
    .createTable("owners", (tbl) => {
      tbl.increments();
      tbl.string("username", 50).index().notNullable().unique();
      tbl.string("password", 20).notNullable();
      tbl.string("ownerName", 50).index().notNullable()
      tbl.string("email")
    })
    .createTable("renters", (tbl) => {
      tbl.increments();
      tbl.string("username", 50).index().notNullable().unique();
      tbl.string("password", 20).notNullable();
      tbl.string("renterName", 50).index().notNullable()
      tbl.string("email")
    })
    .createTable("tech", (tbl) => {
      tbl.increments();
      tbl.string("techItem", 50).index().notNullable();
      tbl.string("techDescription", 500).notNullable();
      tbl.string("owner", 50).index().notNullable();
      tbl.string("price").notNullable();//possibly decimal or string
      tbl
        .integer("ownersId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("owners")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("techRequest", (tbl) => {
      tbl.increments();
      tbl.string("request", 255);
      tbl
        .integer("techId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tech")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("rentersId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("renters")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("techRequest")
    .dropTableIfExists("tech")
    .dropTableIfExists("renters")
    .dropTableIfExists("owners")
};
