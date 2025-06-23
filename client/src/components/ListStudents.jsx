import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'

export default function ListStudents() {
  const [students, setStudents] = useState([
    {student_name:"farnaz", student_email: "a@gmail.com"},
    {student_name:"Chase", student_email: "ab@gmail.com"}
])

useEffect(() => {
  const fetchStudents = async () => {
    const response = await axios.get ("http://localhost:4000/students/")
    console.log (response.data)
    setStudents (response.data) 
  }
  fetchStudents();
}, [])




  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Student Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        {students.map ((student, index)=> (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{student.student_name}</td>
            <td>{student.student_email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
