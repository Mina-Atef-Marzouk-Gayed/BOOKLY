const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'That email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;//3 days
const createToken = (id) => {
  return jwt.sign({ id }, 'TOKEN', {
    expiresIn: maxAge
  });
};



// controller actions
module.exports.signUp_get = (req, res) => {
  res.render('signUp');
}
module.exports.signIn_get = (req, res) => {
  res.render('signIn');
}
module.exports.Terms_get=(req,res)=>{
  res.render('Terms');
}
module.exports.signUp_post = async (req, res) => {
  const { first,last,email, password,Cpassword} = req.body;

  try {
    const user = await User.create({ first,last,email, password,Cpassword });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
    } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}
module.exports.logout_get=(req,res)=>{
  res.cookie('jwt','',{max:1});
  res.redirect('/signIn');
}
module.exports.main_get=(req,res)=>{
  res.render('main');
}
module.exports.wishlist_get=(req,res)=>{
  res.render('wishlist');
}

module.exports.admin_get = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user && user.email === adminCredentials.email) {
      const match = await bcrypt.compare(user.password, adminCredentials.passwordHash);
      if (match) {
        return res.render('admin');
      }
    }
    res.status(403).send('Forbidden');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
}

module.exports.signIn_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signIn(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = { email: '', password: '' };
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
    res.status(400).json({ errors });
  }
}

