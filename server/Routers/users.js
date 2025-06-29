import express from 'express'
import db from '../dbConnection.js'
const Router = express.Router()


Router.post ("/" ,async(req,res)=> {
  console.log ("Router Select User Activated ...")
  const {user_name, user_password} = req.body
  console.log (user_name, user_password)
  try {
    const [rows] = await db.query ("SELECT * FROM users WHERE user_name = ? AND user_password = ?", [user_name, user_password])
    console.log (rows)
    if (rows.length==0)
      res.status(404).send("User not found")
    else
      res.status(200).status("Login successful")
  }
  catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Server error logging in");
  }
  
})

export default Router;