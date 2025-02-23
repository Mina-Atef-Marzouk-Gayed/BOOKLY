const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  first: {
    type: String,
    required: [true, 'Please enter a first name'],
  },
  last: {
    type: String,
    required: [true, 'Please enter a last name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  Cpassword: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  }



});

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.Cpassword = await bcrypt.hash(this.Cpassword, salt);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user
userSchema.statics.signIn=async function(email,password){
  const user=await this.findOne({email});
  if(user){
   const auth=await bcrypt.compare(password,user.password);
   if(auth){
    return user;
  }
  throw Error('incorrect password');
}
  throw Error('incorrect email');
}
//user this is the collection 
const User = mongoose.model('user', userSchema);

module.exports = User;