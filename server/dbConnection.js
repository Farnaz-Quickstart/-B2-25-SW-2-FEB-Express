import mysql from 'mysql2'

const db = mysql.createConnection ( {
  host: 'localhost',
  user: 'root',
  password: 'Ntw29tir*',
  database: 'student_project_db'
})

db.connect ((err)=> {
  if (err) {
    console.log ("Error on DB connect:", err)
    return;
  }
  console.log ("Connected to School DB")
})

export default db;