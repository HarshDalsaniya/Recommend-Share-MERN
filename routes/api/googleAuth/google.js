require("./passport-setupt")
const express = require('express')
var router = express.Router();
const passport = require('passport');
const cookieSession = require('cookie-session')
const GoogleStrategy = require('passport-google-oauth2').Strategy;


router.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))


router.use(passport.initialize());
router.use(passport.session());

router.get('/login', (req, res) => res.send('home page'))
router.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
router.get('/good', (req, res) =>{
    res.render("profile",{name:req.user.displayName,pic:req.user.photos[0].value,email:req.user.emails[0].value})
})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res ,cb) {
      console.log(cb)
    //   if (GoogleStrategy.profile.email_verified == true){
    //     res.send("seccess");
    //   }
    // Successful authentication, redirect home.
    res.send("error");
  }
);

// router.get("/callback",(req,res)=>{
//     res.send("google")
// })

module.exports=router