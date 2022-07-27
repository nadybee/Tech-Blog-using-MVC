const router = require("express").Router()
const sequelize = require("../config/connection")
const { Blogs, User, Comments } = require("../models")
const withAuth = require("../utils/auth")

//gets dashboard page renders users blogposts
router.get("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findAll().catch((err) => {
      res.json(err)
    })
    const userBlogs = blogData.filter(
      (blog) => blog.user_id === req.session.user_id
    )
    const blogs = userBlogs.map((blog) => blog.get({ plain: true }))

    res.render("dashboard", {
      blogs,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    console.log(err)
  }
})

//gets route to edit a blogpost
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findByPk(req.params.id)

    const blog = blogData.get({ plain: true })

    res.render("dashboard", {
      ...blog,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
