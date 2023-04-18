const express = require("express");
const app = express()
const cors = require("cors")

app.use(cors())

const sqlite3 = require('sqlite3').verbose()
let sql;

// connect to db
const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
})

app.listen(5000, () => {
  console.log("yes")
});

// отдаем список
app.get('/users', (async (req, res) => {
  try {
    const users = await db.all("SELECT * FROM users", function(err, rows) {
      return rows
    });
    res.send(users)
  } catch (e) {
    res.status(500).send(`Something went wrong: ${e.message}\n`);
  }
}))

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});

app.post('/add-user', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  res.status(404).send("Sorry can't find that!")
  res.send(
    req.body
  )
})



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
// sql = `UPDATE users SET name = ? WHERE id = ?`
// db.run(sql, ['Ваня', 1], (err) => {
//   if (err) return console.error(err.message);
// })

// query the data
// sql = `SELECT * FROM users`;
// db.all(sql, [], (err, rows) => {
//   if (err) return console.error(err.message);
//     rows.forEach(row => {
//       console.log(row);
//     })
// })


