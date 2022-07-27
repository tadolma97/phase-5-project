import EventList from "./EventList"

function UserProfile({user, events}){
    console.log(events)
    return (
        <>
        <div className="user-card"> 
        <h1>Your Medicines</h1>
        {events.map((event) =><EventList event={event}></EventList>)}
        </div>
        </>
    )
}

export default UserProfile