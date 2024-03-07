import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from "react"; 
import {useNavigate} from "react-router-dom"

function AddHelper({user}){
    let navigate = useNavigate();
    const [first_name, setFirst_Name]= useState()
    const [last_name, setLast_Name]= useState()
    const [email, setEmail]= useState()

    function handleSubmit(e){
        e.preventDefault()
        fetch("/helpers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          first_name: first_name, 
          last_name: last_name, 
          email: email, 
          user_id: user.id
        })
        })
        navigate('/home')
    }

    return(
        <>
        <h1>Let's add a Health Partner!</h1>
        <p>Your health partner will be informed about your daily medicine status.</p>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your health partner's first name" onChange={(e)=>setFirst_Name(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your health partner's last name" onChange={(e)=>setLast_Name(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your health partner's email" onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Button variant="primary" style={{borderRadius:50, border: 0, backgroundColor: 'rgb(0,193,162)', fontSize: 20}} type="submit">
          Submit
        </Button>
        </Form>
        </>

    )
}
export default AddHelper