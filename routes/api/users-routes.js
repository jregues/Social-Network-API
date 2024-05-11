// const router = require('express').Router();
// const {
//   getUsers,
//   getSingleUser,
//   createUser,
//   deleteUser,
//   addUserThoughts,
//   removeUserThoughts,
// } = require('../../controllers/userControllers');


// router.route('/').get(getUsers).post(createUser);


// router.route('/:userId').get(getSingleUser).delete(deleteUser);


// router.route('/:userId/thoughts').post(addUserThoughts);


// router.route('/:userId/thoughts/:thoughtsId').delete(removeUserThoughts);

// module.exports = router;

const router = require('express').Router();
const { getUsers, getSingleUser, createUser, deleteUser, addUserThoughts, removeUserThoughts } = require('../../controllers/userControllers');

router.get('/', getUsers);
router.post('/', createUser);

router.get('/:userId', getSingleUser);
router.delete('/:userId', deleteUser);

router.post('/:userId/thoughts', addUserThoughts);
router.delete('/:userId/thoughts/:thoughtsId', removeUserThoughts);

module.exports = router;