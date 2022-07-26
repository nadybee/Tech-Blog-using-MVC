const router = require('express').Router();
const { User } = require('../../models');


router.get('/', async (req, res) => {
    try {
    const userData = await User.findAll({
     
    });
    console.log('user get')
    return res.json(userData)
    } catch (err) {
      res.json(err)
    }
    })
// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username
      req.session.user_id = dbUserData.id
      res.status(200).json(dbUserData);
    });
    // res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
