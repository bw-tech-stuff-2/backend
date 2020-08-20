
exports.seed = function(knex) {
  return knex('owners').del()
    .then(function () {
      return knex('owners').insert([
        {username: 'Doc', password: hashPassword('backtothefuture'), ownerName:'Emmett Brown', email: 'docbrown@mail.com'},
        {username: 'techgirl', password: hashPassword('fullmetal'), ownerName:'Winry Rockbell', email: 'techgirl@mail.com'},
      ]);
    });
};

const hashPassword = password => {
  const bcrypt = require('bcryptjs');
  const rounds = 12;
  const hash = bcrypt.hashSync(password, rounds);
  return hash;
};