const express = require("express");
const router = express.Router();
const { registerUser, login } = require("../controller/user.controller");
// const {authenticate} = require("../../../middlewares/jwt.middleware");
const { wrapAsync } = require("../../../helpers/router.helper");


router.post("/register", wrapAsync(registerUser));
router.post("/login", wrapAsync(login));


module.exports = router;