import express from 'express'
import db from '../dbConnection.js'
const Router = express.Router()

Router.get ("/login",async(req,res)=> {
  const {username, password} = req.body
  try {
    const [rows] = await db.query ("SELECT * FROM users WHERE users = ? AND password = ?", [username, password])
    if (rows.length==0)
      response.status(404).send("User not found")
    else
      response.status(200).status("Login successful")
  }
  catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Error logging in");
  }
  
})

export default Router;