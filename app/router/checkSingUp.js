const db = require('../config/db.config.js');
const User = db.user;
 
checkDuplicateUserName = (req, res, next) => {
  //if Username is already in use
  User.findOne({
    where: {
      username: req.body.username
    } 
  }).then(user => {
    if(user){
      res.status(400).send("Fail -> Username is already use!");
      return;
    }

    next();
  });
}

 
const signUpCheck = {};
signUpCheck.checkDuplicateUserName = checkDuplicateUserName;
 
module.exports = signUpCheck;