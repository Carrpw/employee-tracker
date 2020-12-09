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
  database: "tracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
  mainOptions();
});

function mainOptions() {
  inquirer
    .prompt({
      name: "pickOption",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee"
      ]
    }).then(function(choice) {
      switch (choice.pickOption) {
        case "View All Departments":
          viewDepartments();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "Add Department":
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

function viewDepartments() {
  connection.query("SELECT * FROM tracker_department", function(err, res) {
    console.log("Departments recorded in Tracker");
    console.table(res);
    mainOptions();
  })
}

function viewRoles() {
  connection.query("SELECT * FROM tracker_role", function(err, res) {
    console.log("Roles recorded in Tracker");
    console.table(res);
    mainOptions();
  })
}

function viewEmployees() {
  connection.query("SELECT * FROM tracker_employee", function(err, res) {
    console.log("Employees recorded in Tracker");
    console.table(res);
    mainOptions();
  })
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the name of the department you would like to add?"
      }
    ]).then(function(answer) {
      connection.query("INSERT INTO tracker_department SET ?", { name: answer.department }, function(err) {
          if (err) throw err;
          console.log("You have sucessfully added the department " + answer.department);
          console.table(answer);
          mainOptions();
        }
      )
    })
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the name of the department you would like to add?"
      }
    ]).then(function(answer) {
      connection.query("INSERT INTO tracker_department SET ?", { name: answer.department }, function(err) {
          if (err) throw err;
          console.log("You have sucessfully added the department " + answer.department);
          console.table(answer);
          mainOptions();
        }
      )
    })
}
