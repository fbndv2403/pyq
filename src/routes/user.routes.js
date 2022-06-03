const { Router } = require("express");
const { check } = require("express-validator");
const { newUser, showUSers } = require("../controllers/user.controller");

const router = Router();

router.get("/showUser", showUSers);
router.post("/newUser", newUser);

module.exports = router;
