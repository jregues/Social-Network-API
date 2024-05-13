const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require("../../controllers/userControllers");

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:userId", getSingleUser);
router.delete("/:userId", deleteUser);

module.exports = router;
