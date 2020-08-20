
exports.seed = function(knex) {
  return knex('renters').del()
    .then(function () {
      return knex('renters').insert([
        {username: 'flyguy', password: hashPassword('backtothefuture'), renterName:'Marty McFly', email: 'flyguy@mail.com'},
        {username: 'alchemist', password: hashPassword('fullmetal'), renterName:'Edward Elric', email: 'alchemist@mail.com'},
      ]);
    });
};

const hashPassword = password => {
  const bcrypt = require('bcryptjs');
  const rounds = 12;
  const hash = bcrypt.hashSync(password, rounds);
  return hash;
};