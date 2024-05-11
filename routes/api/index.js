const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const thoughtsRoutes = require('./thoughts-routes.js');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
