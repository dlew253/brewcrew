require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const isLoggedIn = require('./middleware/isLoggedIn');
const helmet = require('helmet');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');



const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(ejsLayouts);

//app.use("/public", function(req, res, next){
//  console.log(req.url);
//  next();
//});

 const sessionStore = new SequelizeStore({
     db: db.sequelize,
     expiration: 1000 * 60 * 30
   })
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore
  }));

  sessionStore.sync()


app.use(passport.initialize());
app.use(passport.session())
app.use(flash())
  app.use(function(req, res, next) {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
   next();
  })
app.get('/', function(req,res){
    res.render('auth/login');
});
app.use('/auth', require('./controllers/auth'));
app.use('/brewery', isLoggedIn, require('./controllers/brewery'));
app.use('/profile', isLoggedIn, require('./controllers/profile'));
app.use('/events', isLoggedIn, require('./controllers/events'));

var server = app.listen(process.env.PORT || 8000);

module.exports = server;