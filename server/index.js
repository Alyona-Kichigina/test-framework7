// подключение express
const express = require("express");
const sequelize = require('./users.db')
// создаем объект приложения
const app = express();
const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    sequelize.authenticate()
    app.listen(PORT, () => console.log(PORT));
  } catch (e) {
    console.log(e)
  }
}
start()


const sqlite3 = require('sqlite3').verbose()
let sql;

// connect to db
const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
})


// CREATE TABLE users (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   name VARCHAR(50),
//   phone VARCHAR(50),
//   number_var VARCHAR(50)
// );

// INSERT INTO users (name, phone, number_var)
// VALUES ('Tom', '+79697776591', 'О 666 КВ. 178. rus');

// SELECT * FROM users;



// sql = `CREATE TABLE users (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   name VARCHAR(50),
//   phone VARCHAR(50),
//   number_var VARCHAR(50)
// )`
// db.run(sql);


// insert data into table
// sql = `INSERT INTO users (name, phone, number_var) VALUES (?, ?, ?);`
// db.run(sql, ['Антон', '+79697776691', 'О 669 КВ. 178. rus'], (err) => {
//   if (err) return console.error(err.message);
// })

// update data
sql = `UPDATE users SET name = ? WHERE id = ?`
db.run(sql, ['Ваня', 1], (err) => {
  if (err) return console.error(err.message);
})

// query the data
sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);
    rows.forEach(row => {
      console.log(row);
    })
})


