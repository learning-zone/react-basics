-- create schemas

CREATE SCHEMA sales;
go

CREATE TABLE sales.customers (
	customer_id INT IDENTITY (1, 1) PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	email VARCHAR (255) NOT NULL
);


-- sales.customers table
INSERT INTO sales.customers(name, email) VALUES('Leonidas Thomson','leonidas_thomson@gmail.com');
INSERT INTO sales.customers(name, email) VALUES('Inaayah Dillon','inaayah_dillon@gmail.com');
INSERT INTO sales.customers(name, email) VALUES('Zena Fritz','zena_fritz@gmail.com');
INSERT INTO sales.customers(name, email) VALUES('Kodi Redman','kodi_redman@gmail.com');
INSERT INTO sales.customers(name, email) VALUES('Bronte Sutton','bronte_sutton@gmail.com');

