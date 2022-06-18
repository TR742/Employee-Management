USE fourseasons_db

INSERT INTO departments (department_name)
VALUES
    ("Finance"),
    ("HR"),
    ("Food and Beverage");
    ("Front Desk");


INSERT INTO roles (job_title, salary, department_id)
VALUES
('CEO', 1000000, 1),
('HR Manager', 90000, 2),
('Front End Developer', 5000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Leigh', 'Bricker', 1, 1),
('Samantha', 'Gates', 2, 2),
('Leroy', 'Jenkins', 3, 3),
('Benny', 'Heckerman', 4, 4);