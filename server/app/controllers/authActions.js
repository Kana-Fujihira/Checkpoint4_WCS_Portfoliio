// Import access to database tables
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    console.info(req.body);
    console.info(req.body.name);
    console.info(req.body.email);

    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    console.info(user);

    if (user === null || user.length === 0) {
      // If the user is not found
      res.sendStatus(422);
      return;
    }

    console.info(user[0].password);
    console.info(user[0].email);
    console.info(req.body.password);

    // Compare the provided password with the stored password (assuming plain text for simplicity)
    if (user[0].password === req.body.password) {
      delete user[0].password;

      // Respond with the user data (excluding sensitive information)
      res
        .json({
          user: user[0],
        })
        .status(200);
    } else {
      // If the password does not match
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

// Export the controller functions
module.exports = {
  login,
};
