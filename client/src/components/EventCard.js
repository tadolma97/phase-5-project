import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import CardImg from "react-bootstrap/esm/CardImg";
import Button from "react-bootstrap/esm/Button";
import React, { useState, useEffect } from "react"; 
function EventCard({event, change, setChange}){
  const [completed, setCompleted]=useState(event.show_today_reminder.is_completed)
    function handleChange(){
        fetch(`/completed`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                is_completed: !event.show_today_reminder.is_completed,
                id: event.id
            }),
          })
            .then(resp => resp.json())
            .then(data => {console.log(data)
                setCompleted(!completed)})
            
    }
    function handleTime(time){
        const newTime=new Date(time)
        const def = newTime.toLocaleTimeString('default', {
            hour: '2-digit',
            minute: '2-digit',
          });
        return def
    }

    function handleTime2(time){
        time = time.split(":");
    
        let hours = Number(time[0]);
        let minutes = Number(time[1]);
    
        let timeValue;
    
        if (hours > 0 && hours <= 12) {
          timeValue = "" + hours;
        } else if (hours > 12) {
          timeValue = "" + (hours - 12);
        } else if (hours === 0) {
          timeValue = "12";
        }
    
        timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes;
        timeValue += hours >= 12 ? " P.M." : " A.M.";
    
        return timeValue
      };


    return(
        <Card style={{borderRadius:30}} >
            <Card.Body>
            <img  className="card-img" src={event.image} alt={"Medicine"} />
            <Card.Title style={{fontSize: 30}}>{event.name}</Card.Title>
            <Card.Text>Take medicine at: {handleTime2(event.time)} </Card.Text>
            <Button className='complete-button' style={{borderRadius:50, border: 0, backgroundColor: 'rgb(0,193,162)', fontSize: 20}} onClick={handleChange}>{completed ?  `Completed at ${handleTime(event.show_today_reminder.updated_at)}`:"Complete" }</Button>
            </Card.Body>
        </Card>
    )
}

export default EventCard