const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./user/router");

router.use("/users", usersRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

const contactRouter = require("./contact/router");

router.use("/contact", contactRouter);

/* ************************************************************************* */

module.exports = router;
