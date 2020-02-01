exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        { "id": 1, "name": "Fido", "breed": "Beagle", "height": 16},
        { "id" : 2,"name": "Jumbo", "breed": "Great Dane", "height": 48},
        { "id" : 3, "name": "Meggie", "breed": "Golden Retriever", "height": 30},
      ]);
    });
};
