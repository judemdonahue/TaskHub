const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper');
const session = require("express-session");
const passport = require("./config/passport");
const sequelize = require("./config/connection");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  helpers: helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sessions
app.use(
  session({
    secret: "eventually-in-env",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated()) {
    // make user object available in handlebars templates
    res.locals.user = req.user.get({ plain: true });
  }
  next();
});


// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
