USE fourseasons_db

INSERT INTO department (department_name)
VALUES
    ("Finance"),
    ("HR"),
    ("Food and Beverage"),
    ("Front Desk");


INSERT INTO roles (job_title, salary, department_id)
VALUES
    ('Director of Finance', 100000, 1),
    ('Director of HR', 75000, 2),
    ('Director of Food and Beverage', 150000, 3),
    ('Front Desk associate', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Leigh', 'Bricker', 1, 1),
    ('Samantha', 'Gates', 2, 2),
    ('Leroy', 'Jenkins', 3, 3),
    ('Benny', 'Heckerman', 4, 4);