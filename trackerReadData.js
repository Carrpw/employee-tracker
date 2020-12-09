const inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "tracker_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  employeeTracker();
});

function mainOptions() {
  inquirer
    .prompt({
      name: "pickOption",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Departmens",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee"
      ]
    })
    .then(function(choice) {
      switch (choice.pickOption) {
        case "View All Departmens":
          viewDepartments();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "Add Depar(tment":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        
      }
    ])
}
