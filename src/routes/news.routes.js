const { Router } = require("express");
const { check } = require("express-validator");

const { news } = require("../controllers/news.controller");
const { valiadateFields } = require("../middlewares");

const router = Router();

router.post("/", news);

module.exports = router;
