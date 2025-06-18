import express from 'express'
import db from '../dbConnection.js'
const Router = express.Router()          
// req. body
// req.params


// GET all Students: http://localhost:4000/students/
Router.get ('/',async (req,res)=> {
  db.query ("SELECT * FROM students", (err, result)=>{
  if (err) {
    console.log ("Error retriving students", err)
    return res.status(500).send ("Server error while retrieving students")
  } 
    res.status(200).json (result)
})
})

// GET one student by ID: http://localhost:4000/students/12
Router.get ("/:id", (req,res)=> {
  const studentID = req.params.id
  const sql = "SELECT * FROM students WHERE student_id = ?"
  db.query (sql, [studentID] , (err, result)=> {
    if (err) {
      console.error ("Error retriving student", err)
      return res.status(500).send ("Server error while retrieving student")
    }
    res.status(200).json(result[0])
  })
})


// POST add a new student: http://localhost:4000/students/
Router.post ("/", (req, res)=> {
  const {name, email} = req.body
  const sql = "INSERT INTO students (name,email) VALUES (? , ?)"
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error("Error adding student:", err);
      return res.status(500).send("Server error while adding student");
    }
    res.status(201).send("Student added successfully");
  });
})


// DELETE a student by ID: http://localhost:4000/students/:id
Router.delete('/:id', (req, res) => {
  const studentID = req.params.id;
  const sql = "DELETE FROM students WHERE student_id = ?";
  db.query(sql, [studentID], (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      return res.status(500).send("Server error while deleting student");
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send("Student deleted successfully");
  });
});

export default Router;