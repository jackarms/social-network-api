const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought);

router.route("/:userId").post(addThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtId/reactions").put(addReaction);

router.route("/:thoughtId/reactions/:id").delete(removeReaction);

module.exports = router;
