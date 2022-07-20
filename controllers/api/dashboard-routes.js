const router = require('express').Router();
const Blogs  = require('../../models/Blogs');

router.get ('/', async (req, res) => {
    
    res.render('dashboard')
    
    })

    router.get('/', async (req, res) => {
        try {
        const blogData = await Blogs.findAll().catch((err)=>{
            res.json(err)
        })
        
       
         res.render('dashboard', blogData)
            console.log(blogData)
        }
        catch (err){
            console.log(err)
        }
    })

    router.post('/', async (req, res) => {
        try {
          const postblogData = await Blogs.create({
            blog_title: req.body.blog_title,
            username: 'littlealta',
            user_id: 2,
            date: '07/20/2022',
            content: req.body.content,
         
          });
          res.status(200).json(postblogData);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
      

module.exports = router;