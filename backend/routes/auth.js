var jwt = require('jwt-simple');
var User = require('../models/user');

var auth = {
 
  login: function(req, res) {
 
    var username = req.body.username || '';
    var password = req.body.password || '';
 
    if (username === '' || password === '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Favor inserir username e password"
      });
      return;
    }
 
    // Fire a query to your DB and check if the credentials are valid
    return auth.validate(username, password, res);   
  },
 
  validate: function(username, password, res) {
    // spoofing the DB response for simplicity
    console.log(username);
    console.log(password);
    User.findOne({
      'username':username,
      'password':password
    }, function(err, resp){

      if(err || !resp){

        res.status(401);
        res.json({
          "status": 401,
          "message": "Invalid credentials"
        });
        return false;

      }

      if(resp){
        res.json(genToken(resp)); 
        return resp;
      }

    });
  },
 
  validateUser: function(username, callback) {

    User.findOne({
      'username':username
    }, function(err, resp){

      if(err){
        callback(false);
      }

      if(resp){
        callback(resp)
      }

    });

  },
}
 
// private method
function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());
 
  return {
    token: token,
    expires: expires,
    user: user
  };
}
 
function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}
 
module.exports = auth;