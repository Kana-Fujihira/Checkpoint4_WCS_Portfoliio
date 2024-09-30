const AbstractSeeder = require("./AbstractSeeder");

class ProjectSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "project", truncate: true });
  }

  run() {
    const projects = [
      {
        teamname: "Ewoks",
        projectname: "Le Kaleine Quizz",
        skill: "Figma HTML CSS JavaScript",
        projectlink: `https://github.com/wilderLPM/P1lesEwoks`,
      },
      {
        teamname: "Holidayplanner",
        projectname: "Find Your Holiday",
        skill: "Figma Trello React JavaScript Express Node",
        projectlink: `https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-holidays_planner`,
      },
      {
        teamname: "Personal Project",
        projectname: "Easy Morning Routine",
        skill: "Figma HTML CSS JavaScript React",
        projectlink: `https://github.com/Kana-Fujihira/Morning-Routine-React-App`,
      },
      {
        teamname: "Ricetrio",
        projectname: "Broadkat",
        skill:
          "Figma Trello HTML CSS JavaScript React Express Node Mysql JWT Argon2",
        projectlink: `https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-Ricetrio`,
      },
      {
        teamname: "Personal Project",
        projectname: "Catinder",
        skill:
          "Figma Trello HTML CSS JavaScript React Express Node Mysql Argon2",
        projectlink: `https://github.com/Kana-Fujihira/matching-react-app`,
      },
    ];

    projects.forEach((project) => {
      this.insert(project); // insert into user(teamname,projectname, skill,projectlink) values (?, ?,?,?)
    });
  }
}

// Export the UserSeeder class
module.exports = ProjectSeeder;
