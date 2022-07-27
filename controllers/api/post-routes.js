const router = require('express').Router();
// const User = require('../../models/User');
const Blogs  = require('../../models/Blogs');
const withAuth = require("../../utils/auth");



//allows user to delete a blog

    router.delete('/:id', withAuth, async (req, res) => {
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

    router.put('/edit/:id', async (req, res) => {
      console.log(req.body)
      try{
      const editBlogData = await Blogs.update({
        blog_title: req.body.blog_title,
        content: req.body.content,
        date: new Date()
      },
      {
        where: {
          id: req.params.id
        }
      })
      console.log('here' , editBlogData)
      res.status(200).json(editBlogData);
      // console.log(res)
      }
      catch (err){
        res.status(500).json(err);
      }
    })
      
    
   //allows user to post a new blog 
    router.post('/', withAuth, async (req, res) => {
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