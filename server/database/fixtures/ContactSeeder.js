const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "contact", truncate: true });
  }

  run() {
    const contacts = [
      {
        name: "kana",
        email: "kana@kana.com",
        phonenumber: "09074286987",
        companyname: "kana",
        message: "kana",
      },
    ];

    contacts.forEach((contact) => {
      this.insert(contact); // insert into user(name,email, phonenumber, companyname,message) values (?,?,?, ?,?)
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
