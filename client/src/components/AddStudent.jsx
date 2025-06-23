import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'


export default function AddStudent() {
const [formData, setFormData] = useState ({
  student_name: "",
  student_email: ""
})


function handleChange(event) {
  const { name,value } = event.target
  setFormData ({...formData, [name]: value})
}

async function handleClick (event) {
  event.preventDefault()
  console.log (formData)
  try {
    await axios.post("http://localhost:4000/students/", {
      student_name: formData.student_name,
      student_email: formData.student_email
    })
  }
  catch (error) {
    console.log ('Error in adding user', error)
    alert ("Error in adding user")
  }
}

  return (
    <Form  >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            name="student_name"
            placeholder="Student Name"
            defaultValue="Student Name"
            onChange={(event)=>handleChange(event)}
          />
        </Form.Group>      
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Control 
            type="text" 
            name="student_email"
            placeholder="Student Email" 
            required 
            onChange={(event)=>handleChange(event)}/>        
        </Form.Group>
      </Row>
     
      <Button type="submit" onClick={handleClick}>Submit form</Button>
    </Form>
    

  )
}
