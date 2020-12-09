const inquirer = require("inquirer");
const mysql = require("mysql");

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
        "Add Employee",
        "Exit"
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

        case "Exit":
          Exit();
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

function addRole() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "input",
        message: "What is the title of the role you would like to add?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the role you would like to add?"
      },
      {
        name: "department",
        type: "input",
        message: "What is the department id for the role you would like to add in?",
      }
    ]).then(function(answer) {
        connection.query("INSERT INTO tracker_role (title, salary, department_id) VALUES (?, ?, ?)", 
        [ 
          answer.role,
          answer.salary,
          answer.department 
        ], 
        function(err) {
            if (err) throw err;
            console.log("You have sucessfully added the role " + answer.role);
            console.table(answer);
            mainOptions();
          }
        )  
    })
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the first name of the employee you would like to add?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the last name of the employee you would like to add?"
      },
      {
        name: "role",
        type: "input",
        message: "What is the role id for the employee you would like to add in?",
      },
      {
        name: "manager",
        type: "input",
        message: "What is the manager id for the employee you would like to add in?",
      }
    ]).then(function(answer) {
        connection.query("INSERT INTO tracker_employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
        [ 
          answer.first_name,
          answer.last_name,
          answer.role,
          answer.manager 
        ], 
        function(err) {
            if (err) throw err;
            console.log("You have sucessfully added the employee " + answer.first_name + " " + answer.last_name);
            console.table(answer);
            mainOptions();
          }
        )  
    })
}

function Exit() {
  connection.end();
}

// "FROM tracker_department INNER JOIN tracker_role ON (tracker_department.id = tracker_role.department_id";