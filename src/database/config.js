import { Pool, Client } from "pg";
var mysql = require("mysql");
require("dotenv").config();

//Conection

const con = mysql.createConnection({
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  user: process.env.DEV_DB_USERNAME,
  database: process.env.DEV_DB_NAME,
  password: process.env.DEV_DB_PASSWORD,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to Database!");
});

module.exports = con;
