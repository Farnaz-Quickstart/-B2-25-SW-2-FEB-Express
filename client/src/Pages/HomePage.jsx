import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AddStudent from '../components/AddStudent'
import ListStudents from '../components/ListStudents'

export default function HomePage() {
  const [students, setStudents] = useState([{student_id: "", student_name:"", student_email: ""}])

  const fetchStudents = async () => {
    const response = await axios.get ("http://localhost:4000/students/")
    console.log (response.data)
    setStudents (response.data) 
  }

  useEffect(() => {
    fetchStudents();
  }, [])


  return (
    <>
      <AddStudent fetchStudents={fetchStudents} />
      <ListStudents students={students} setStudents={setStudents} />
    </>
  )
}
