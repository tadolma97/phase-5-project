import Button from "react-bootstrap/esm/Button"
import { useState } from "react"; 
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function EventList({event, change, setChange}){
    const [edit, setEdit]= useState(true)
    const [name, setName]=useState(event.name)
    const [image, setImage] = useState(event.image)
    const [startDate, setStartDate] = useState(event.start_date)
    const [endDate, setEndDate] = useState(event.end_date)
    const [recurrencePattern, setRecurrencePattern] = useState(event.recurrence_pattern)
    const [time, setTime]=useState(event.time)

    function handleClick(){
        setEdit(!edit)
    }

    function handleCancel(){
        setEdit(!edit)
    }

    function handleSubmit(){
        fetch(`/events/` + event.id, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name, 
                image: image, 
                start_date: startDate, 
                end_date: endDate, 
                recurrence_pattern: recurrencePattern, 
                time: time 
            }),
          })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    function handleDelete(){
        fetch('/events/' + event.id, {
        method: 'DELETE',
        })
        setChange(!change)
    }
    return (
        <>
        {edit ? <li>{event.name}<Button onClick={handleClick}>Edit</Button><Button onClick={handleDelete}>Delete</Button> </li>:
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Add Image</Form.Label>
                <Form.Control type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="startdate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" name="startdate" value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="enddate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" name="enddate" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="recurrencePattern">
                <Form.Select
                    value={recurrencePattern}
                    id="dropdown-menu-align-right"
                    onChange={(e)=>setRecurrencePattern(e)}
                >     
                    <option  value="Daily">Daily</option>
                    <option value="option-2">x</option>
                </Form.Select>
                </Form.Group>
                {/* <Form.Group controlId="time" value={time}>
                    <TimePicker start="5:00" end="21:00" step={60} onChange={(e)=>setTime(e)} value={time} />
                </Form.Group> */}
                <Form.Group controlId="time">
                    <Form.Control type="time" value={time} onChange={(e)=>setTime(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
                <Button onClick={handleCancel}>
                    Cancel
                </Button>
            </Form>
      }
        </>
    )
}

export default EventList