const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  run() {
    // Generate fake user data
    const users = [
      {
        name: "",
        email: "",
        password: "",
      },
    ];

    users.forEach((user) => {
      this.insert(user); // insert into user(name,email, password) values (?, ?,?)
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
