const { deluser } = require("../controllers/user");
const router = require("express").Router();
router.post("/:id", deluser);
module.exports = router;
