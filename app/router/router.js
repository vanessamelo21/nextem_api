const checkSingUp = require('./checkSingUp');
const authJwt = require('./checkJwtToken');
 
module.exports = function(app) {
 
    const controller = require('../controller/controller.js');
 
  app.post('/api/auth/signup', [checkSingUp.checkDuplicateUserName], controller.signup);
  
  app.post('/api/auth/signin', controller.signin);
  
  app.get('/api/test/user', [authJwt.checkToken], controller.userContent);
  
}