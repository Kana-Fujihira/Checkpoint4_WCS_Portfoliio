const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate fake user data
    const users = [
      {
        name: "", // Generate a fake email using faker library
        email: "", // Generate a fake password using faker library
        password: "", // Create a reference name for the user
      },
    ];

    // Insert the fakeUser data into the 'user' table
    users.forEach((user) => {
      this.insert(user); // insert into user(email, password) values (?, ?)
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
