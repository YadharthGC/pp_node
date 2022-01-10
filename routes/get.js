const { getuser } = require("../controllers/user");
const router = require("express").Router();
router.get("/", getuser);
module.exports = router;
