import { useState, useEffect } from "react"; 
import EventCard from "./EventCard";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";

function Home({user}){
    let navigate = useNavigate();
    const [events, setEvents]=useState([])
    const [change, setChange] = useState(false)


    useEffect(() => {
        fetch(`/user/${user.id}/events`)
          .then(response=> response.json())
          .then(data=> {setEvents(data)})
        }, [change])

    
    return(
        <>
        <h1>Hello, {user.first_name}</h1>
        <Button onClick={()=>navigate('/page')}>Manage Account</Button>
        <p>These are the medicines you need to take today:</p>
        <Container className="p-1">
        <Row >
        {events.map(event=><Col xs={12} sm={6} md={4}>
            <EventCard event={event} key={event.id} change={change} setChange={setChange}></EventCard>
            </Col>)}
        </Row>
        </Container>
        </>
    )
}

// <div>Hello, {user.first_name}</div>

export default Home