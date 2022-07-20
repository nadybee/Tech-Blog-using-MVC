const res = require('express/lib/response');
const router = require('express').Router();
const Blogs = require('../models/Blogs')

// router.get ('/', async (req, res) => {
    


// })

router.get('/', async (req, res) => {
    try {
    const blogData = await Blogs.findAll().catch((err)=>{
        res.json(err)
    })
    const blogs = blogData.map((blog) =>blog.get({plain:true}))
    
   
     res.render('homepage', {
         blogs,
        loggedIn: req.session.loggedIn})
       
    }
    catch (err){
        console.log(err)
    }
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


router.get ('/blogpost', async (req, res) => {
    
    res.render('blogpost')
    
    })

    router.get ('/dashboard', async (req, res) => {
    
        res.render('dashboard')
        
        })

module.exports = router;