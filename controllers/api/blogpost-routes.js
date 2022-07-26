const res = require('express/lib/response');
const Comments = require("../../models/Comments")
const Blogs = require('../../models/Blogs')
const User = require('../../models/User');
const { response } = require('express');

const router = require('express').Router();


    router.get('/', async (req, res) => {
        try {
        const blogData = await Blogs.findAll().catch((err)=>{
            res.json(err)
        })
        
      res.json(blogData)
       
        }
        catch (err){
            console.log('there was an error '+ err)
        }
    })


//get the blog

  router.get("/:id", async (req, res) => {
    try {
      const blogData = await Blogs.findByPk(req.params.id,
        {
            include: [ {
                model: Comments,
                as: 'comments'
            },
            
            ]
            
        })
        const blog = blogData.get({plain:true})

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with that id!' });
            return;
          } 
            //   req.session.save(() => {
            //   req.session.blog_id = blog.id 
              
            //   res.status(200)
            //   .json(blog)
            //   })
         
        } catch (err) {
          console.log(err)
          res.status(500).json(err);
        }
     
   
  })

//post the comment

router.post('/', async (req, res) => {
    console.log(req.session.user_id)
    try {
      const postCommentData = await Comments.create({
        content: req.body.content,
        username: req.session.username,
        user_id: req.session.user_id,
        date: new Date(),
        blog_id: req.body.blogId
         // username: "nady",
        // user_id: 4,
   
     
      });
      res.status(200).json(postCommentData);
    console.log('posted!')

    } catch (err) {
  
      res.status(500).json(err);
    }
  });



module.exports = router;