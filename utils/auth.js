//helper used to redirect users to login if no logged in.
const withAuth = (req, res, next) => {
  console.log(req.session)
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } 
    else {
      next();
    }
  };
  
  module.exports = withAuth;
  