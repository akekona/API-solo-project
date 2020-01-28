exports.up = function(knex, Promise) {
  return knex.schema.createTable("hsk_vocab", t => {
    t.increments("id")
      .unique()
      .notNullable()
      .index();

    t.integer("level").index();

    t.string("hanzi")
      .notNullable()
      .index();

    t.string("pinyin")
      .notNullable()
      .index();

    t.text("translations")
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable("hsk_vocab");
};
