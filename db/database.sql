CREATE DATABASE IF NOT EXISTS companydb;

USE companydb:

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VACHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (Id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Antonio', 1000),
(2, 'Henry', 1250),
(3, 'Paco', 678),
(4, 'Marcus', 2348);