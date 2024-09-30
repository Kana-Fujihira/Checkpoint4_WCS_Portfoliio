const AbstractRepository = require("./AbstractRepository");

class ProjecRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "project" as configuration
    super({ table: "project" });
  }

  // The C of CRUD - Create operation

  async create(project) {
    // Execute the SQL INSERT query to add a new item to the "project" table
    const [result] = await this.database.query(
      `insert into ${this.table} (teamname, projectname, skill,projectlink) values (?,?,?,?)`,
      [
        project.teamname,
        project.projectname,
        project.skill,
        project.projectlink,
      ]
    );

    // Return the ID of the newly inserted project
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific project by its ID
    const [rows] = await this.database.query(
      `select id, from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the project
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all project from the "project" table
    const [rows] = await this.database.query(
      `select id,teamname,projectname,skill,projectlink from ${this.table}`
    );

    // Return the array of project
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing project

  // async update(project) {
  //   ...
  // }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ProjecRepository;
