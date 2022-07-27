const res = require("express/lib/response")
const Comments = require("../../models/Comments")
const { response } = require("express")
const router = require("express").Router()
const withAuth = require("../../utils/auth")

//post the comment

router.post("/", withAuth, async (req, res) => {
  try {
    const postCommentData = await Comments.create({
      content: req.body.content,
      username: req.session.username,
      user_id: req.session.user_id,
      date: new Date(),
      blog_id: req.body.blogId,
      // username: "nady",
      // user_id: 4,
    })
    res.status(200).json(postCommentData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
