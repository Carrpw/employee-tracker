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
  department_id INTEGER(tracker_department.id) NOT NULL,
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
  manager_id INTEGER NULL
)

-- Create new example rows
INSERT INTO tracker_department(name)
VALUES ("Management");

INSERT INTO tracker_role(title, salary, )
VALUES ("President", 300000, tracker_department.id);

INSERT INTO tracker_employee(first_name, last_name, role_id, tracker_role.department_id)
VALUES ("CSS", 5, true);

-- Updates the row where the column name is peter --
UPDATE programming_languages
SET mastered = false
WHERE id = 3;

SELECT * FROM programming_languages; */