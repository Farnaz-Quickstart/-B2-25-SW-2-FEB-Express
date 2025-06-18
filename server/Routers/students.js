import express from 'express'
import db from '../dbConnection.js'
const Router = express.Router()

// Main Request: http://localhost:4000/students/

Router.get ('/',async (req,res)=> {
  db.query ("SELECT * FROM students", (err, result)=>{
  res.send (result)
  })
})



export default Router;