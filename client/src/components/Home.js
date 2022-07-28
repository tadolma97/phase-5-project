import { useState, useEffect } from "react"; 
import EventCard from "./EventCard";
import Button from "react-bootstrap/esm/Button";
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
        <div>Hello, {user.first_name}</div><Button onClick={()=>navigate('/userprofile')}>Manage Account</Button>
        <div>These are the medicines you need to take today.</div>
        {events.map(event=><EventCard event={event} key={event.id} change={change} setChange={setChange}></EventCard>)}
        </>
    )
}

// <div>Hello, {user.first_name}</div>

export default Home