-- Drops the tracker_db if it already exists --
DROP DATABASE IF EXISTS tracker_db;
-- Create a database called tracjer_db --
CREATE DATABASE tracker_db;

-- Use tracker_db for the following statements --
USE tracker_db;

CREATE TABLE tracker_department (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER AUTO_INCREMENT NOT NULL,
  -- Create a string column called "name" --
  name VARCHAR(30),
  -- Set the id as this table's primary key
  PRIMARY KEY(id)
);

CREATE TABLE tracker_role (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER AUTO_INCREMENT NOT NULL,
  -- Create a string column called "title" --
  title VARCHAR(30) NOT NULL,
  -- Create a numeric decimal to hold a salary
  salary DECIMAL(6,0) NOT NULL,
  -- Create a numeric decimal to hold a salary  
  department_id INTEGER NOT NULL,
  -- Set the id as this table's primary key
  PRIMARY KEY(id)
);

CREATE TABLE tracker_employee (
  --Create a numeric column called "id" which will automatically increment its default value as we create new rows.
  id INTEGER AUTO_INCREMENT NOT NULL,
  -- Create a string column called "first_name"
  first_name VARCHAR(30) NOT NULL,
  -- Create a string column called "last_name"
  last_name VARCHAR(30) NOT NULL,
  -- Create a numeric column called "role_id"
  role_id INTEGER NOT NULL,
  -- Create a numeric column called "manager_id"
  manager_id INTEGER NULL,
  -- Set the id as this table's primary key
  PRIMARY KEY(id)
)

-- Create new example rows
INSERT INTO tracker_department(name)
VALUES ("Management"), ("Legal"), 
("Software Engineering"), 
("Marketing"), 
("Finance"), 
("Human Resources");

INSERT INTO tracker_role(title, salary, department_id)
VALUES ("President", 300000, 1),
("Financial Manager", 200000, 1),
("Legal Manager", 200000, 1),
("Employee Manager", 200000, 1),
("Lawyer", 175000, 2),
("Senior Software Engineer", 175000, 3),
("Senior Marketing Analyst", 150000, 4),
("Senior Financial Officer", 175000, 5),
("Senior HR Consultant", 150000, 6),
("Software Engineer", 100000, 3);

INSERT INTO tracker_employee(first_name, last_name, role_id, manager_id)
VALUES ("Paul", "Carr", 1, NULL),
("Alpha", "Smith", 2, 1),
("Bravo", "Smith", 3, 1),
("Charlie", "Smith", 4, 1),
("Delta", "Smith", 5, 3),
("Echo", "Smith", 6, 4),
("Foxtrot", "Smith", 7, 2),
("Golf", "Smith", 8, 2),
("Hotel", "Smith", 9, 3),
("India", "Smith", 10, 4),
("Juliet", "Smith", 10, 4);

-- Updates the row where the column name is peter --

/* SELECT * FROM ; */