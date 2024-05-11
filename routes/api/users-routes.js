const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addUserThoughts,
  removeUserThoughts,
} = require('../../controllers/userControllers');


router.route('/').get(getUsers).post(createUser);


router.route('/:userId').get(getSingleUser).delete(deleteUser);


router.route('/:userId/thoughts').post(addUserThoughts);


router.route('/:userId/thoughts/:thoughtsId').delete(removeUserThoughts);

module.exports = router;
