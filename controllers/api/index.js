const router = require('express').Router();
const userRoutes = require('./user-routes');
const authRoutes = require('./auth-routes');
const dashboardRoutes = require('./dashboard-routes')
const blogPostRoutes = require('./blogpost-routes')


router.use('/users', userRoutes);
router.use('/auth', authRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/blogpost', blogPostRoutes)

module.exports = router;