
exports.seed = function(knex) {
  return knex('owners').insert([
    {username: 'Doc', password: 'backtothefuture', ownerName: 'Emmett Brown', email: 'docbrown@mail.com'}, //1
    {username: 'techgirl', password: 'fullmetal', ownerName: 'Winry Rockbell', email: 'techgirl@mail,com'}, //2
  ]);
};