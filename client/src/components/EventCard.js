
function EventCard({event, change, setChange}){
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
            .then(data => console.log(data))
            setChange(!change)
    }


    return(
        <li className="card">
            <h3>{event.name}</h3>
            <img src={event.image} alt={"Medicine"} />
            <p>Take medicine at: {event.time} </p>
            <button onClick={handleChange}>{event.show_today_reminder.is_completed ?  `Completed at ${event.show_today_reminder.updated_at}`:"Complete" }</button>
        </li>
    )
}

export default EventCard