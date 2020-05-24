
exports.seed = function(knex) {
  return knex('renters').insert([
    {username: 'flyguy', password: 'backtothefuture', renterName: 'Marty McFly', email: 'flyguy@mail.com'}, //1
    {username: 'alchemist', password: 'fullmetal', renterName: 'Edward Elric', email: 'alchemist@mail,com'}, //2
  ]);
};
