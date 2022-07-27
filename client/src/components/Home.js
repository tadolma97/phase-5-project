import { useState, useEffect } from "react"; 
import EventCard from "./EventCard";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Home({user, events, setEvents}){
    let navigate = useNavigate();


    useEffect(() => {
        fetch(`/user/${user.id}/events`)
          .then(response=> response.json())
          .then(data=> {setEvents(data)})
        }, [])

        console.log(events)
    
    return(
        <>
        <div>Hello, {user.first_name}</div><Button onClick={()=>navigate('/userprofile')}>Manage Account</Button>
        <div>These are the medicines you need to take today.</div>
        {events.map(event=><EventCard event={event} key={event.id}></EventCard>)}
        </>
    )
}

// <div>Hello, {user.first_name}</div>

export default Home