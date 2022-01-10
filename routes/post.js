const { postuser } = require("../controllers/user");
const router = require("express").Router();
router.post("/", postuser);
module.exports = router;
