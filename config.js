module.exports = {
  db: {
    client: "pg",
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "hsk_vocab",
      user: process.env.DB_USER || "ashleykekona",
      password: process.env.DB_PASSWORD || ""
    }
  },

  test_db: {
    client: "pg",
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "test-hsk_vocab",
      user: process.env.DB_USER || "ashleykekona",
      password: process.env.DB_PASSWORD || ""
    }
  }
};
