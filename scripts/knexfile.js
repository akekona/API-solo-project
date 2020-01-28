// Update with your config settings.
const config = require("../config");

module.exports = {
  development: {
    client: "pg",
    connection: config.db.connection, // "postgres://localhost/hsk_vocab"
    migrations: {
      directory: "../models/migrations"
    },
    seeds: {
      directory: "../models/seeds"
    }
  },
  test: {
    client: "pg",
    connection: config.test_db.connection, //"postgres://localhost/test-hsk_vocab",
    migrations: {
      directory: "./models/migrations"
    },
    seeds: {
      directory: "./models/seeds"
    }
  }
};
