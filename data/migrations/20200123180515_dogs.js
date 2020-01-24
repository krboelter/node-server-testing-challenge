
exports.up = function(knex) {
    knex.schema.createTable("dogs", (table) => {
        table.increments()
        table.string("name")
            .notNullable()
        table.string("breed")
            .notNullable()
        table.integer("height")
            .unsigned()
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists("dogs")
};
