const knex = require("knex")
const config = require("../knexfile").dev

module.exports = knex(config)