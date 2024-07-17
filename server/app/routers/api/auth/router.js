const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import  user-related actions
const { login } = require("../../../controllers/authActions");

// Route to add a new user
router.post("/", login);

/* ************************************************************************* */

module.exports = router;
