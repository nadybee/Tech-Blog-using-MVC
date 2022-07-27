const res = require("express/lib/response")
const router = require("express").Router()
const Blogs = require("../models/Blogs")
const Comments = require("../models/Comments")
const withAuth = require("../utils/auth")

//gets homepage and renders all the blogposts
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

//gets signup page
router.get("/signup", (req, res) => {
  res.render("signup")
})

//gets login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/")
    return
  }
  res.render("login")
})

//gets single blogpost with comments, must be signed in
router.get("/blogpost/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          as: "comments",
        },
      ],
    })

    const blog = blogData.get({ plain: true })

    res.render("blogpost", {
      ...blog,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
