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
  user_id int,
  room_id int,
  FOREIGN KEY (room_id) REFERENCES rooms (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
