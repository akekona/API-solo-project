const request = require("supertest");
const knex = require("../scripts/knex");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
// chai.use(chaiHttp);

const app = require("../app.js");
const data = require("../scripts/hsk-vocab-json/hsk_vocab_data.js");

describe("The express server", () => {
  beforeEach(done => {
    knex.migrate
      .latest("./models/migrations")
      .then(() => {
        return knex.seed.run();
      })
      .then(() => {
        done();
      });
  });
  it("should list all vocab records", done => {
    request(app)
      .get("/api/vocab")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        expect(res.body).to.deep.equal(data);
        done();
      });
  });
  it("should get single vocab by id", done => {
    const fixture = {
      id: 1,
      level: 1,
      hanzi: "昨天",
      pinyin: "zuó tiān",
      translations: "yesterday"
    };
    request(app)
      .get("/api/vocab/id=1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        console.log(res.body);
        expect(res.body).to.deep.equal(fixture);
        done();
      });
  });
  it("should get vocab by level", done => {
    request(app)
      .get("/api/vocab/level=2")
      .then(res => {
        expect(res.body[0]).to.deep.equal(data[1]);
        expect(res.body.length).to.equal(1);
        done();
      });
  });

  it("should allow new vocab additions", done => {
    const newVocab = {
      level: 1,
      hanzi: "少",
      pinyin: "shǎo",
      translations: "few, little, lack"
    };
    request(app)
      .post("/api/vocab/")
      .send(newVocab)
      .then(res => {
        expect(res.body).to.be.a("object");
        newVocab.id = res.body.id;
        expect(res.body).to.deep.equal(newVocab);
      });
    done();
  });

  it("should allow edits to the vocab object", done => {
    const fixture = {
      level: 2,
      hanzi: "昨天",
      pinyin: "zuó tiān",
      translations: "yesterday"
    };
    const updatedVocab = {
      id: 1,
      level: 2,
      hanzi: "昨天",
      pinyin: "zuó tiān",
      translations: "yesterday"
    };
    request(app)
      .put("/api/vocab/1")
      .send(updatedVocab)
      .set("Accept", "application/json")
      .then(res => {
        console.log(res.body);
        expect(res.body).to.deep.equal(updatedVocab);
        done();
      });
  });

  it("should remove vocab with delete request", done => {
    request(app)
      .delete("api/vocab/15")
      .then(res => {
        expect(res.body).to.deep.equal({ staus: "deleted" });
        done();
      });
  });
});
