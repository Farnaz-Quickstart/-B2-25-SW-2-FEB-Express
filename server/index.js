import express from 'express'
import cors from 'cors'
import studentsRouts from './Routers/students.js'
import coursesRouts from './Routers/courses.js'
import enrollmentsRouts from './Routers/enrollements.js'
import usersRouts from './Routers/users.js'


const app = express();
app.use (express.json())                    // This required to 
app.use(cors());                            // This allows all origins (good for development)


app.use('/students', studentsRouts)         // http://localhost:4000/students/
app.use('/courses', coursesRouts)           // http://localhost:4000/courses/
app.use('/enrollments', enrollmentsRouts)   // http://localhost:4000/enrollments/
app.use('/users', usersRouts)               // http://localhost:4000/users/


app.get ('/',(req, res)=> {
  res.send ("Server running")
})

app.listen (4000, ()=> {
  console.log ("Listennig at http://localhost:4000")
})