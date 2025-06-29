import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'

export default function LoginPage() {
  const [formData, setFormData] = useState ({
    user_username: "",
    user_password: ""
  })

  function handleChange (event) {
    const {name, value} = event.target
    setFormData ({...formData, [name]:value})
  }

  async function handleClick (event) {
    try {
        const response = await axios.post ("http://localhost:4000/users/", {user_username:formData.user_username, user_password:formData.user_password})
        console.log (response)
    }
    catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <>
      <h3>Admin Login</h3>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Control
            required
            type="text"
            placeholder="User Name"
            name="user_username"
            onChange={(event)=>handleChange(event)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Control
            required
            type="text"
            placeholder="User Password"
            name="user_password"
            onChange={(event)=>handleChange(event)}
          />
        </Form.Group>
      </Row>
      <Button type="button" onClick={(event)=>handleClick(event)} >Submit form</Button>
      </Form>
    </>
  )
}
