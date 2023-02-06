const router = require("express").Router();

router.get("usertest", (req,res) =>{
    res.send("user test is sucessfel");
});

router.post("/userposttest", (req,res) =>{
    const username = req.body.username;
    res.send("Your username is " + username)
});

module.exports = router;