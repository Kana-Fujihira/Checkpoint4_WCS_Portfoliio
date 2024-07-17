const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import  user-related actions
const { browse, read, add } = require("../../../controllers/projectActions");

// Route to get a list of  project
router.get("/", browse);

// Route to get a specific  project by ID
router.get("/:id", read);

// Route to add a new project
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
