const router = require('express').Router();

const userRoutes = require('./user-routes');

const authRoutes = require('./auth-routes');

const dashboardRoutes = require('./dashboard-routes')

router.use('/users', userRoutes);
router.use('/auth', authRoutes)
router.use('./dashboard', dashboardRoutes)

module.exports = router;