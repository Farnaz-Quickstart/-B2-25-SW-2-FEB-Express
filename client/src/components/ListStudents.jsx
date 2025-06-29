import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'

export default function ListStudents( {students, setStudents} ) {

const [selectedStudent, setSelectedStudent] = useState(null);

async function handleStudentClick (event, StudentID) {
  try {
    const response = await axios.get (`http://localhost:4000/students/${StudentID}`)
    console.log (response)
    setSelectedStudent (response.data)
  } catch (error) {
    console.log (error)
  }
} 



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
            <td><a onClick={(event)=>{
              event.preventDefault();
              handleStudentClick(event, student.student_id)
              }}>{student.student_name}</a></td>
            <td>{student.student_email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
