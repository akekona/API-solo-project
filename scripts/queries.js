const knex = require("./knex");

module.exports = {
  getAll() {
    return knex("hsk_vocab");
  },
  getById(id) {
    return knex("hsk_vocab")
      .where("id", id)
      .first();
  },
  getByLevel(level) {
    return knex("hsk_vocab").where("level", level);
  },
  newVocab(vocab) {
    return knex("hsk_vocab").insert(vocab, "*");
  },
  updateVocab(id, vocab) {
    return knex("hsk_vocab")
      .where("id", id)
      .update(vocab, "*");
  },
  removeVocab(id) {
    return knex("hsk_vocab")
      .where("id", id)
      .del();
  }
};
