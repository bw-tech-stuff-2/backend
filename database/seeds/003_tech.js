

exports.seed = function(knex) {
  return knex('tech').insert([
    {techItem: 'Time Traveling DeLorean', techDescription: 'This car can travel through time, please return yesterday.', owner: 'Doc', price: '$7.00', ownersId: 1}, //1
    {techItem: 'Mechanical Arm', techDescription: 'Need a hand?', owner: 'techgirl', price: '$1,000,000', ownersId: 2}, //2
  ]);
};