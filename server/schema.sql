CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message varchar(300),
  username varchar(30),
  roomname varchar(30),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
