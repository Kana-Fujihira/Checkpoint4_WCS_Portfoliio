const AbstractSeeder = require("./AbstractSeeder");

class ProjectSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "project", truncate: true });
  }

  run() {
    const projects = [
      {
        teamname: "Ricetrio",
        projectname: "prodkat",
        skill: "React, Mysql",
        projectlink: `https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-Ricetrio`,
      },
      {
        teamname: "Holidayplanner",
        projectname: "Find your holiday",
        skill: "React",
        projectlink: `https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-holidays_planner`,
      },
    ];

    projects.forEach((project) => {
      this.insert(project); // insert into user(teamname,projectname, skill,projectlink) values (?, ?,?,?)
    });
  }
}

// Export the UserSeeder class
module.exports = ProjectSeeder;
