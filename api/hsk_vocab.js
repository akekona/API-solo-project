const express = require("express");
const router = express.Router();
const queries = require("../scripts/queries");

//middleware
function isValidID(req, res, next) {
  if (!isNaN(req.params.id)) {
    return next();
  } else {
    next(new Error("Invalid ID"));
  }
}
function isValidLevel(req, res, next) {
  if (!isNaN(req.params.level) && 0 < req.params.level < 7) {
    return next();
  } else {
    next(new Error("Invalid Level. Levels must be between 1-6"));
  }
}

//api
router.get("/", (req, res) => {
  queries.getAll().then(vocabs => {
    res.json(vocabs);
  });
});

router.get("/id=:id", isValidID, (req, res, next) => {
  queries.getById(req.params.id).then(vocab => {
    if (vocab) {
      res.json(vocab);
    } else {
      next();
    }
  });
});

router.get("/level=:level", isValidLevel, (req, res, next) => {
  queries.getByLevel(req.params.level).then(vocabs => {
    if (vocabs) {
      res.json(vocabs);
    } else next(new Error(404));
  });
});

router.post("/", (req, res, next) => {
  queries.newVocab(req.body).then(vocab => {
    if (vocab) {
      res.json(vocab[0]);
    } else next(new Error("Could not add new vocab"));
  });
});

router.put("/:id", (req, res, next) => {
  if (!isNaN(req.params.id)) {
    queries.updateVocab(req.params.id, req.body).then(vocab => {
      res.json(vocab[0]);
    });
  } else {
    next(new Error("Could not update level"));
  }
});

router.delete("/:id", isValidID, (req, res) => {
  queries.removeVocab(req.params.id).then(() => {
    res.json({
      status: "deleted"
    });
  });
});

module.exports = router;
