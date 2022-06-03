const { Router } = require("express");
const { check } = require("express-validator");

const {
  showNews,
  newNews,
  editNews,
  deleteNews,
  deleteAllNews,
} = require("../controllers/news.controller");
const { valiadateFields } = require("../middlewares");
const {
  urlExits,
  tittleRepeat,
  descriptionRepeat,
} = require("../helpers/db_validator");

const router = Router();

router.get("/", showNews);
router.post(
  "/new",
  [
    check("tittle").not().isEmpty().withMessage("The title is required"),
    check("tittle").custom(tittleRepeat),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The description is required"),
    check("description").custom(descriptionRepeat),
    check("url").not().isEmpty().withMessage("The url is required"),
    check("url").custom(urlExits),
    valiadateFields,
  ],
  newNews
);
router.put(
  "/edit/:id",
  [
    check("tittle").not().isEmpty().withMessage("The title is required"),
    check("tittle").custom(tittleRepeat),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The description is required"),
    check("description").custom(descriptionRepeat),
    check("url").not().isEmpty().withMessage("The url is required"),
    check("url").custom(urlExits),
    valiadateFields,
  ],
  editNews
);

router.delete(
  "/delete/:id",
  [check("id", "Is not a valid id").isMongoId(), valiadateFields],
  deleteNews
);

router.delete("/deleteAll", deleteAllNews);

module.exports = router;
