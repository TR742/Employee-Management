DROP DATABASE IF EXISTS fourseasons_db;
CREATE DATABASE fourseasons_db;

USE fourseasons_db;

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id),
    FOREIGN KEY (role_id) REFERENCES roles(department_id)
    ON DELETE SET NULL
);