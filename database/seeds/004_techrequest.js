
exports.seed = function(knex) {
  return knex('techRequest').insert([
    {request: 'I need this Nov 5th' }, //1
    {request: 'I need this by Friday'}, //2
  ]);
};