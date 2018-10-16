const db = require("../models");

module.exports = {
  getAll: function(req, res) {
    db.Article
      .find({})
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
};
