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
    .createTable("tech", (tbl) => {
      tbl.increments();
      tbl.string("techItem").notNullable();
      tbl.string("owner").notNullable();
      tbl.integer("price").notNullable();
    })
    .createTable("techRequest", (tbl) => {
      tbl.increments();
      tbl.string("request", 20);
      tbl
        .integer("techId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tech")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("renterId")
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
