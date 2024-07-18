const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  run() {
    const users = [
      {
        name: "",
        email: "",
        hashed_password: "",
      },
    ];

    users.forEach((user) => {
      this.insert(user); // insert into user(name,email, hashed_password) values (?, ?,?)
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
