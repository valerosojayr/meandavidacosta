var mongoose = require ("mongoose");
var Schema = mongoose.Schema;
const bcrypt = require ("bcrypt");

var UserSchema = new Schema ({
    username: {type:String, lowercase: true, required: true, unique: true},  //this is our validation
    password: {type:String, required: true},
    email: {type:String, lowercase: true, required: true, unique: true},
});




//PRESAVE
UserSchema.pre('save',async function (next){
try{

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
    // console.log(this.email, this.password)
    // this is just a test to check if email and pw will be logged on the terminal

}

catch(error){
    next(error)
}

})



module.exports = mongoose.model("User", UserSchema); 