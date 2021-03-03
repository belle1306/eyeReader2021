require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "bwyd",
  multipleStatements: true
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "DROP DATABASE if exists `bwyd`; CREATE DATABASE bwyd; USE bwyd; CREATE TABLE `users`(`userid` INT NOT NULL AUTO_INCREMENT,	`username` varchar(50),`email` varchar(50) NOT NULL,`useradd` varchar(50) NOT NULL,	`chef` BOOLEAN NOT NULL,	PRIMARY KEY (`userid`));CREATE TABLE `orders`(`orderid` INT NOT NULL AUTO_INCREMENT,	`userid` INT,	`trade` BOOLEAN NOT NULL,	`delivery` BOOLEAN NOT NULL,	`itemid` INT,	`qty` INT,	PRIMARY KEY (`orderid`));CREATE TABLE `items`(`itemid` INT NOT NULL AUTO_INCREMENT, `itemname` varchar(50) NOT NULL, `url` varchar(500) NOT NULL,`price` FLOAT,	`available` BOOLEAN NOT NULL,	`userid` INT NOT NULL,	`free_items` INT,	PRIMARY KEY (`itemid`));ALTER TABLE `orders` ADD CONSTRAINT `orders_fk0` FOREIGN KEY (`userid`) REFERENCES `users`(`userid`);ALTER TABLE `orders` ADD CONSTRAINT `orders_fk1` FOREIGN KEY (`itemid`) REFERENCES `items`(`itemid`);ALTER TABLE `items` ADD CONSTRAINT `items_fk0` FOREIGN KEY (`userid`) REFERENCES `users`(`userid`);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables creation for `bwyd` database were successful!");

    console.log("Closing...");
  });

  con.end();
});


