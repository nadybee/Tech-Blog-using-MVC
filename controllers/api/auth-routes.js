const router = require("express").Router()
const { User } = require("../../models")

// Allows user Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    })

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" })
      return
    }

    const validPassword = await dbUserData.checkPassword(req.body.password)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" })
      return
    }
    //save cookies for session after login
    req.session.save(() => {
      req.session.loggedIn = true
      req.session.username = dbUserData.username
      req.session.user_id = dbUserData.id

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" })
      // console.log(dbUserData)
      // console.log(req.session.user_id)
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router
