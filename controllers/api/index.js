const router = require('express').Router();
const userRoutes = require('./user-routes');
const authRoutes = require('./auth-routes');
const postRoutes = require('./post-routes')
const blogPostRoutes = require('./blogpost-routes')


router.use('/users', userRoutes);
router.use('/auth', authRoutes)
router.use('/post', postRoutes)
router.use('/blogpost', blogPostRoutes)

module.exports = router;