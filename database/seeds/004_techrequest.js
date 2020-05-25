
exports.seed = function(knex) {
  return knex('techRequest').insert([
    {request: 'I need this Nov 5th', techId: 1, rentersId: 1 }, //1
    {request: 'I need this by Friday', techId: 2, rentersId: 2 }, //2
  ]);
};