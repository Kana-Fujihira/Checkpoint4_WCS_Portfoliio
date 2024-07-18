const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

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

    console.info(user[0].hashed_password);
    console.info(user[0].password);
    console.info(user[0].email);
    console.info(req.body.password);

    const verified = await argon2.verify(
      user[0].hashed_password,
      req.body.password
    );

    // Compare the provided password with the stored password (assuming plain text for simplicity)
    if (verified === true) {
      delete user[0].hashed_password;
      const token = await jwt.sign(
        { sub: user.id, isAdmin: user.is_admin },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 3600000,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        path: "/",
      });

      delete user.password;
      delete user.id;

      // Respond with the user data (excluding sensitive information)
      res
        .json({
          user,
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
