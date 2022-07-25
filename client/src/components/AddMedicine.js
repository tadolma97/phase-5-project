import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TimePicker from 'react-bootstrap-time-picker';
import { useState} from "react"
import {useNavigate} from "react-router-dom"


function AddMedicine(){
    let navigate = useNavigate();
    const [name, setName]=useState("")
    const [image, setImage] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [recurrenePattern, setRecurrencePattern] = useState("")
    const [time, setTime]=useState()

    console.log(name, image, startDate, endDate, recurrenePattern, time)
    
    function handleSubmit(e){
      console.log(name, image, startDate, endDate)
      navigate('/moremedicine')
    }


    return (
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
            title="Dropdown right"
            id="dropdown-menu-align-right"
            onSelect={(e)=>setRecurrencePattern(e)}
        >
              <Dropdown.Item eventKey="Daily">Daily</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">x</Dropdown.Item>
      </DropdownButton>
        </Form.Group>
        <Form.Group controlId="time">
            <TimePicker start="10:00" end="21:00" step={30} onChange={(e)=>setTime(e)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default AddMedicine