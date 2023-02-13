var User = require ("../models/user")


module.exports = function (router) {    
    
var errmessage = "Fillup the form completely";

//http://localhost:8080/users
router.post("/users", function (req,res){
    var user = new User()
    user.username = req.body.username;
    user.password = req.body.password;
    user.email =req.body.email;


    if (req.body.username == null || req.body.username == "" || req.body.password == null || req.body.password == "" || req.body.email == null || req.body.email == ""  ){
        res.send ("Ensure usernaame, password and email are filled up.");
    }

    else{

        user.save(function(err){
            if(err){
                res.send(err.code + errmessage)
            }
            else{
                res.send ("Yes User Created")
            }
        });
    }

})
    
    
return router};