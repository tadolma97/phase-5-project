import EventList from "./EventList";
import { useState, useEffect } from "react"; 
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import HealthPartner from "./HealthPartner";

function UserProfile({user}){
    let navigate = useNavigate();
    const [events, setEvents]=useState([])
    const [partners, setPartners] = useState([])
    const [change, setChange]=useState(false)

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

    return (
        <div>
        <div className="user-card"> 
        <h1>Your Medicines</h1>
        {events.map((event) =><EventList event={event} key={event.id} change={change} setChange={setChange}></EventList>)}
        </div>
        <h2>Your Health Partner</h2>
        {partners.map((partner) =><HealthPartner partner={partner} key={partner.id} change={change} setChange={setChange}></HealthPartner>)}
        <Button onClick={() => navigate('/')}>Done</Button>
        </div>
    )
}

export default UserProfile