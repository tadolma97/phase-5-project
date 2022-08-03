import Button from "react-bootstrap/esm/Button"
import Form from 'react-bootstrap/Form';
import { useState } from "react"; 
import AddHelper from "./AddHelper";
import Modal from 'react-bootstrap/Modal';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function HealthPartner({partner, partners}){
    const [edit, setEdit]= useState(true)
    const [first_name, setFirst_Name]= useState(partner.first_name)
    const [last_name, setLast_Name]= useState(partner.last_name)
    const [email, setEmail]= useState(partner.email)
    const [modal, setModal]=useState(false)


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

    function handleCancel(){
      setEdit(!edit)
    }

    function handleDelete(){
      if (partners.length =1)
        setModal(true)
    }

    function handleClose(){
      setModal(false)
    }
    return (
        <>{edit ?
          <tbody>
            <tr>
            <td>{partner.first_name} {partner.last_name} </td> 

            <td>{partner.email}</td>
            <button className='invisible-button' onClick={()=>setEdit(false)}> <Player hover loop
                    src="https://assets2.lottiefiles.com/packages/lf20_hezrxjwp.json"
                    style={{ height: '50px', width: '50px' }}
                    
                  >
                  <Controls  visible={false} buttons={['play', 'hover', 'frame', 'debug']} />
                  </Player> </button>
                  <button className='invisible-button' onClick={()=>handleDelete()}> <Player hover loop
                    src="https://assets9.lottiefiles.com/packages/lf20_zqyfjktd.json"
                    style={{ height: '50px', width: '50px' }}
                    
                  >
                  <Controls  visible={false} buttons={['play', 'hover', 'frame', 'debug']} />
                  </Player> </button>
                  
            </tr> 
            </tbody>
            :
            <Modal show         backdrop="static">
              <Modal.Body>
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
                <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button onClick={handleCancel}>
                    Cancel
                </Button>
                </div>
                </Form>
              </Modal.Body>
            </Modal>
        }
        <Modal show={modal} dialogClassName="modal-90w"   size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered>
          <Modal.Body justify-content="center">
            <h3>You only have one Health Partner. </h3>
            <h3>Please add another Health Partner before deleting.</h3>
          </Modal.Body>
          <Button style={{backgroundColor: 'rgb(0,193,162)', border: "none"}} onClick={handleClose}>
            Close
          </Button>
        </Modal>
        </>
    )
}

export default HealthPartner