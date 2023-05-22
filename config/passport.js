const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (email, password, done) => {
    // Tries to find the user in our database
    const user = await User.findOne({ where: { email } });
    if (!user) {
        console.log('wrong email')
      return done(null, false, { message: 'wrong email.' });
    }
    // Checks if the password is correct
    if (!user.checkPassword(password)) {
        console.log('wrong password')
      return done(null, false, { message: 'wrong password.' });
    }
    return done(null, user);
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findOne({ where: { id } })
    .then(user => {
      cb(null, user);
    })
    .catch(err => {
      cb(err);
    });
});

  
  module.exports = passport;