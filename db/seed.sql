USE employees_db;

INSERT INTO department
    (name)
VALUES
    ('dept1'),
    ('dept2'),
    ('dept3');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('title 1', 100, 1),
    ('title 12', 200, 1),
    ('title 13', 300, 1),

    ('title 2', 200, 2),
    ('title 22', 300, 2),
    ('title 23', 400, 2),

    ('title 3', 300, 3),
    ('title 3', 300, 3),
    ('title 3', 300, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ('firstname', 'lastname1', 1, 1),
    ('firstname2', 'lastname2', 2, 2),
    ('firstname3', 'lastname3', 3, 3);

SELECT * FROM employee;