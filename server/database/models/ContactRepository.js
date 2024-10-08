const AbstractRepository = require("./AbstractRepository");

class ContactRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "contact" });
  }

  // The C of CRUD - Create operation

  async create(contact) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, email, phonenumber,companyname, message) values (?,?,?,?,?)`,
      [
        contact.name,
        contact.email,
        contact.phonenumber,
        contact.companyname,
        contact.message,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select id, email from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id,email from ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return rows;

    // The U of CRUD - Update operation
    // TODO: Implement the update operation to modify an existing item

    // async update(item) {
    //   ...
    // }

    // The D of CRUD - Delete operation
    // TODO: Implement the delete operation to remove an item by its ID

    // async delete(id) {
    //   ...
    // }
  }
}

module.exports = ContactRepository;
