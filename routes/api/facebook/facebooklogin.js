
var express = require('express');
var router = express.Router();
const passport = require("passport")
const FacebookStrategy = require("passport-facebook").Strategy




router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user)
  })
  passport.deserializeUser(function(user, done) {
    done(null, user)
  })

  router.get('/', function(req, res) {

    res.end("Node-Android-Chat-Project"); 
});

  passport.use(
    new FacebookStrategy(
      {
        clientID: "382229516837199",
        clientSecret: "a0f8347ecf1bfa87a188139affde4caa",
        callbackURL: "http://localhost:4000/api/facebook/facebooklogin/callback",
      },
      function(accessToken, refreshToken, profile, done) {
        console.log("accesToken ", accessToken)
        console.log ("refreshToken", refreshToken)
        console.log ("profile", profile)
        user = {} // find or create a user in your database
        done(null, user)

    }))

    // app.get('/callback',
    //     passport.authenticate('facebook', {
    //         successRedirect : '/profile',
    //         failureRedirect : '/'
    //     }));
  
router.get("/facebookAuth",  passport.authenticate('facebook',
    {
        successRedirect : '/profile',
        failureRedirect : '/'
    }))

    router.post('/facebook/token', function(req, res, next) {
        passport.authenticate(['facebook-token'], function(err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status
            if (! user) {
                console.log(req.user);
                return res.send({ success : false, message : 'authentication failed' });
            }
            console.log("Success!!");
                return res.send({ success : true, message : 'authentication succeeded' });
        })(req, res, next);
    });

router.get("/callback", passport.authenticate('facebook', { successRedirect: '/',
            failureRedirect: '/login' }));




  module.exports = router