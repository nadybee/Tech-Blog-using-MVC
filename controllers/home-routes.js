const res = require('express/lib/response');

const router = require('express').Router();

router.get ('/', async (req, res) => {
    const users = `users`
res.render('homepage', {users})
// {
//     try{
//         res.render('main')
//     }
//     catch (err){
//         console.log(err)
//         res.status(500).json(err)
//     }
})



router.get('/signup', (req, res) => {
   
    res.render('signup');
  });

  
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;