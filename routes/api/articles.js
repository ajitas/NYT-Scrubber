const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
  .get(articleController.getAll)
  .post(articleController.save);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .delete(articleController.remove);

module.exports = router;
