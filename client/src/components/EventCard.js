function EventCard({event}){
    console.log(event)
    function handleChange(){
        // fetch(`/completed/`+event.id, {
            fetch(`/completed`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                is_completed: true,
                id: event.id
            }),
          })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }
    console.log(event.time)

    return(
        <li className="card">
            <h3>{event.name}</h3>
            <img src={event.image} alt={"Medicine Image"} />
            <p>Take medicine at: {event.time} </p>
            <div>  Complete <input onClick={handleChange} type="checkbox" /> </div> 

        
        </li>
    )
}

export default EventCard