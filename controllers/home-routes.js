const res = require("express/lib/response")
const router = require("express").Router()
const Blogs = require("../models/Blogs")
const Comments = require("../models/Comments")

const withAuth = require("../utils/auth")

// router.get ('/', async (req, res) => {

// })

router.get("/", async (req, res) => {
  try {
    const blogData = await Blogs.findAll().catch((err) => {
      res.json(err)
    })
    const blogs = blogData.map((blog) => blog.get({ plain: true }))

    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    console.log(err)
  }
})

router.get("/signup", (req, res) => {
  res.render("signup")
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/")
    return
  }

  res.render("login")
})

// router.get("/blogpost/:id", async (req, res) => {
//   res.render("blogpost")
// })

router.get('/blogpost/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blogs.findByPk(req.params.id,
            {
                include: [ {
                    model: Comments,
                    as: 'comments'
                },
                
                ]
      });
  
      const blog = blogData.get({plain:true})
  
      res.render('blogpost', {
        ...blog,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


// router.get("/dashboard", withAuth, (req, res) => {
//     if (!req.session.loggedIn){
//         res.redirect("/login")
//         return
//     }
//   res.render("dashboard"
//   , {
//     loggedIn: req.session.loggedIn,
//   }
//   )
// })

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findAll().catch((err) => {
      res.json(err)
    })
    const userBlogs = blogData.filter((blog)=>blog.user_id ===req.session.user_id)
    const blogs = userBlogs.map((blog) => blog.get({ plain: true }))

    res.render("dashboard", {
      blogs,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    console.log(err)
  }
})


// router.get("/blogpost", async (req, res) => {
//     try {
//       const commentData = await Comments.findAll().catch((err) => {
//         res.json(err)
//       })
//       const comments = commentData.map((comment) => comment.get({ plain: true }))
  
//       res.render("blogpost", {
//         comments,
//         loggedIn: req.session.loggedIn,
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   })

// router.get("/dashboard",(req, res) => {
//     if (!req.session.loggedIn){
//         res.redirect("/login")
//         return
//     }
//   res.render("dashboard"
// //   , {
// //     loggedIn: req.session.loggedIn,
// //   }
//   )
// })

module.exports = router
