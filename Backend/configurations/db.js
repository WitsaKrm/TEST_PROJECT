const config = require("./config");
require("dotenv").config();
const mysql = require("mysql2");

const DB = mysql.createPool({
  host: config.db.host,
  port: config.db.Port,
  user: config.db.user,
  password: config.db.pwd,
  database: config.db.database,
  connectionLimit: config.db.MAX_POOL,
  acquireTimeout: config.db.IDLE,
});

DB.query((err) => {
  if (err) {
    console.error("Unable to connect to the database:", err);
  } else {
    console.log("Connected to PlanetScale!");
    console.log("Connection has been established successfully.");
  }
});
module.exports = DB;
