const router = require('express').Router();
// const User = require('../../models/User');
const Blogs  = require('../../models/Blogs');
const withAuth = require("../../utils/auth");

    router.get('/', withAuth, async (req, res) => {
        try {
        const blogData = await Blogs.findAll().catch((err)=>{
            res.json(err)
        })
        
         res.render('dashboard', blogData)
       
        }
        catch (err){
            console.log('there was an error '+ err)
        }
    })

    router.post('/', async (req, res) => {
        console.log(req.session.user_id)
        try {
          const postblogData = await Blogs.create({
            blog_title: req.body.blog_title,
            // username: "nadybee",
            // user_id: 1,
            username: req.session.username,
            user_id: req.session.user_id,
            date: new Date(),
            content: req.body.content,
            blog_id: req.session.blog_id
         
          });
          res.status(200).json(postblogData);
        console.log('posted!')

        } catch (err) {
      
          res.status(500).json(err);
        }
      });
      

module.exports = router;