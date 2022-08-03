import EventList from "./EventList";
import { useState, useEffect } from "react"; 
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import HealthPartner from "./HealthPartner";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function UserProfile({user, select}){
    const [events, setEvents]=useState([])
    const [partners, setPartners] = useState([])
    const [change, setChange]=useState(false)
    const [edit, setEdit]= useState(true)
    const [name, setName]=useState("")
    const [image, setImage] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [recurrencePattern, setRecurrencePattern] = useState("Pick a Schedule")
    const [time, setTime]=useState()

    useEffect(() => {
        fetch(`/user/${user.id}/events`)
          .then(response=> response.json())
          .then(data=> {setEvents(data)})
        }, [change])

    useEffect(() => {
        fetch(`/user/${user.id}/helpers`)
            .then(response=> response.json())
            .then(data=> {setPartners(data)})
        }, [change])

        function handleSubmit(e){
            e.preventDefault()
            fetch("/events", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
              name: name, 
              image: image, 
              start_date: startDate, 
              end_date: endDate, 
              is_recurring: true, 
              recurrence_pattern: recurrencePattern, 
              user_id: user.id, 
              time: time 
            })
            })
            setEdit(true)
          }

    return (
        <div className="user-profile">
          <div>
            {select=="profile"?
            <div>
        <div className="title-row">
            <h1></h1><h1 className="d-inline">{user.first_name} {user.last_name}</h1><h1></h1>
        </div>
        <div class="mt-5">
        <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
        <Table className="medicine-table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <button className='invisible-button' onClick={()=>setEdit(false)}> <Player hover loop
                                src="https://assets2.lottiefiles.com/packages/lf20_hezrxjwp.json"
                                style={{ height: '50px', width: '50px' }}
                    
                        >
                          <Controls  visible={false} buttons={['play', 'hover', 'frame', 'debug']} />
                          </Player> 
                        </button>
                        <h1></h1>
                      </tr>
                    </tbody>
        </Table>
        </div>
        </div> </div>:null}
        {select=="medicine"?
        <div>
        <div className="title-row">
            <h2></h2><h1 className="d-inline">Your Medicines</h1>
          
          {edit? <button className='invisible-button' onClick={()=>setEdit(false)}> <Player hover loop
                    src="https://assets7.lottiefiles.com/packages/lf20_xv68mi5q.json"
                    style={{ height: '60px', width: '60px' }}
                    
                  >
                  <Controls  visible={false} buttons={['play', 'hover', 'frame', 'debug']} />
                  </Player> </button>: 
                  <Modal show         backdrop="static">
                  <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>Medicine Name</Form.Label>
                                      <Form.Control type="text" placeholder="Enter name of medicine" onChange={(e)=>setName(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>Add Image</Form.Label>
                                      <Form.Control type="text" placeholder="Enter name of medicine" onChange={(e)=>setImage(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group controlId="startdate">
                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control type="date" name="startdate" placeholder="Start date" onChange={(e)=>setStartDate(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="enddate">
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control type="date" name="enddate" placeholder="End date" onChange={(e)=>setEndDate(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group controlId="recurrenePattern">
                                    <DropdownButton
                                        title={recurrencePattern}
                                        id="dropdown-menu-align-right"
                                        onSelect={(e)=>setRecurrencePattern(e)}
                                    >     
                                          <Dropdown.Item eventKey="Daily">Daily</Dropdown.Item>
                                          <Dropdown.Item eventKey="option-2">x</Dropdown.Item>
                                  </DropdownButton>
                                    </Form.Group>
                                    <Form.Group controlId="time">
                                        <Form.Control type="time"  onChange={(e)=>setTime(e.target.value)} value={time} />
                                    </Form.Group>
                                    <div className="d-flex justify-content-center">
                                    <Button variant="primary" type="submit">
                                      Submit
                                    </Button>
                                    <Button onClick={()=>setEdit(true)}>Cancel</Button>
                                    </div>
                                  </Form>
      </Modal.Body>
            </Modal>
      }
      </div>
      <div class="container">
        <div class="mt-5">
        <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
                <Table className="medicine-table">
                              <thead>
                                  <tr>
                                  <th scope="col">Medicine Name</th>
                                  <th scope="col">Image</th>
                                  <th scope="col">Start Date</th>
                                  <th scope="col">End Date</th>
                                  <th scope="col">Time</th>
                                  </tr>
                              </thead>
                  {events.map((event) =><EventList event={event} key={event.id} change={change} setChange={setChange}></EventList>)}
                  </Table>
        </div>
        </div>
        </div>
        </div>:null}
        {select=="partner"?
        <div>
        <div className="title-row">
        <h2></h2>   <h1 className="d-inline">Your Health Partner</h1>
                  {edit? <button className='invisible-button' onClick={()=>setEdit(false)}> <Player hover loop
                              src="https://assets7.lottiefiles.com/packages/lf20_xv68mi5q.json"
                              style={{ height: '60px', width: '60px' }}
                              
                            >
                            <Controls  visible={false} buttons={['play', 'hover', 'frame', 'debug']} />
                            </Player> </button>: 
                            <Modal show         backdrop="static">
                            <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name of medicine" onChange={(e)=>setName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Add Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter name of medicine" onChange={(e)=>setImage(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="startdate">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control type="date" name="startdate" placeholder="Start date" onChange={(e)=>setStartDate(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="enddate">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control type="date" name="enddate" placeholder="End date" onChange={(e)=>setEndDate(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="recurrencePattern">
                  <DropdownButton
                      title={recurrencePattern}
                      id="dropdown-menu-align-right"
                      onSelect={(e)=>setRecurrencePattern(e)}
                  >     
                        <Dropdown.Item eventKey="Daily">Daily</Dropdown.Item>
                        <Dropdown.Item eventKey="option-2">x</Dropdown.Item>
                </DropdownButton>
                  </Form.Group>
                  <Form.Group controlId="time">
                      <Form.Control type="time"  onChange={(e)=>setTime(e.target.value)} value={time} />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button onClick={()=>setEdit(true)}>Cancel</Button>
                  </div>
                </Form>
                </Modal.Body>
                      </Modal>
                }
      </div> 
        <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
        <Table className="medicine-table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
        {partners.map((partner) =><HealthPartner partner={partner} partners={partners} key={partner.id} change={change} setChange={setChange}></HealthPartner>)}
        </Table>
        </div>
        </div>:null}
        </div>
        </div>

    )
}

export default UserProfile