const router = require('express').Router();
// const User = require('../../models/User');
const Blogs  = require('../../models/Blogs');
const withAuth = require("../../utils/auth");



//allows user to delete a blog

    router.delete('/:id', async (req, res) => {
      try {
        const blogData = await Blogs.destroy({
          where: {
            id: req.params.id,
          },
        });
 
        res.status(200).json(blogData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
   
  //allows user to edit there post  
    router.put('/:id', (req, res) => {
      try{
      const editBlogData = Blogs.update({
        blog_title: req.body.blog_title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(editBlogData);
      }
      catch (err){
        res.status(500).json(err);
      }
    })
      
    
   //allows user to post a new blog 
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