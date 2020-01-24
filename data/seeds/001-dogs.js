exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        { "name": "Fido", "breed": "Beagle", "height": 16},
        { "name": "Jumbo", "breed": "Great Dane", "height": 48},
        { "name": "Meggie", "breed": "Golden Retriever", "height": 30},
      ]);
    });
};
