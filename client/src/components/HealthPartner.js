import Button from "react-bootstrap/esm/Button"
import Form from 'react-bootstrap/Form';
import { useState } from "react"; 
import AddHelper from "./AddHelper";
function HealthPartner({partner}){
    const [edit, setEdit]= useState(true)
    const [first_name, setFirst_Name]= useState(partner.first_name)
    const [last_name, setLast_Name]= useState(partner.last_name)
    const [email, setEmail]= useState(partner.email)

    function handleSubmit(){
        fetch('/helpers/'+ partner.id, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name, last_name, email
            }),
          })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }
    return (
        <>{edit ?<div> {partner.first_name} {partner.last_name} <Button onClick={()=>setEdit(false)}>Edit</Button><Button >Delete</Button></div> :
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={first_name} onChange={(e)=>setFirst_Name(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={last_name} onChange={(e)=>setLast_Name(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        }
        </>
    )
}

export default HealthPartner