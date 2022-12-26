const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./teachgit.db";

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}

function createTable(db) {
  db.exec(`
  CREATE TABLE user
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname   VARCHAR(50) NOT NULL,
    lastname   VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL

  );
`);
}

module.exports = createDbConnection();