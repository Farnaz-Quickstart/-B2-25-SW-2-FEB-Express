import express from 'express'
import db from '../dbConnection.js'
const Router = express.Router()          


// GET all Students: http://localhost:4000/students/
Router.get ('/',async (req,res)=> {
  console.log ("asdasdasdsa")
  try {
    const [result] = await db.query("SELECT * FROM students")
    res.status(200).json(result)
  } catch (err) {
    console.log("Error retrieving students:", err);
    res.status(500).send("Server error while retrieving students");
  }
})

// GET one student by ID: http://localhost:4000/students/12
Router.get ("/:id", async (req,res)=> {
  const studentID = req.params.id
  const sql = "SELECT * FROM students WHERE student_id = ?"
  try {
    const result = await db.query (sql, [studentID])
    if ( result == 0 ) {
      return res.status(404).send("Student Not found")
    }
    res.status(200).json(result[0])
    console.log (result)
  } catch (err) {
    res.status(500).send(err)
  }
})


// POST add a new student: http://localhost:4000/students/
Router.post ("/", async (req, res)=> {
  console.log ("Post request is comming ....")
  console.log (req.body)
  const { student_name, student_email } = req.body
  const sql = "INSERT INTO students (student_name,student_email) VALUES (? , ?)"
  try {
    await db.query(sql, [student_name, student_email]);
    res.status(201).send("Student added successfully");
  } catch (err) {
    console.error("Error adding student:", err);
    res.status(500).send("Server error while adding student");
  }
});


// DELETE a Student by ID: http://localhost:4000/students/:id
Router.delete('/:id', async (req, res) => {
  const studentID = req.params.id;
  const sql = "DELETE FROM students WHERE student_id = ?";

  try {
    const [result] = await db.query(sql, [studentID]);

    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }

    res.status(200).send("Student deleted successfully");
  } catch (err) {
    console.error("Error deleting student:", err);
    res.status(500).send("Server error while deleting student");
  }
});


export default Router;