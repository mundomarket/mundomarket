const passport = require("passport");
const router= require("express").Router();
const CLIENT_URL = "http://localhost:3001"//front

router.get("/login/failed", (req:any,res:any)=>{
res.status(401).json({
    success: false,
    message: "failure",
});
});
router.get("/login/success", (req:any, res:any) => {
    //console.log("req.user",req.user)
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        // cookies: req.cookies
      });
    }
  });
router.get("/logout", (req:any, res:any)=>{
    req.logout();
    //console.log("entre al logout")
    res.redirect(CLIENT_URL);
});
router.get("/google",passport.authenticate("google",{ scope: ["profile", "email"]}))
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failuredRedirect: "/login/failed"
}))

module.exports = router