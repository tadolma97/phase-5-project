import { useState, useEffect } from "react"; 
import EventCard from "./EventCard";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";
import { Player, Controls } from '@lottiefiles/react-lottie-player';



function Home({user, setUser}){
    let navigate = useNavigate();
    const [events, setEvents]=useState([])
    const [change, setChange] = useState(false)
    const msg = new SpeechSynthesisUtterance()
    const [medicines, setMedicines]= useState([])

  const speechHandler = (msg) => {
    msg.text = (`Hello, ${user.first_name}. These are the medicines you need to take today: ${medicines} `)
    window.speechSynthesis.speak(msg)
  }
  useEffect(() => {
    window.speechSynthesis.speak(msg)
  }, [msg])

    function handleEvent(events){
    events.map(event => {
        setMedicines([...medicines, `${event.name} at ${event.time}`])})
  }
console.log(medicines)


console.log(user)
    useEffect(() => {
        fetch(`/user/${user.id}/events`)
          .then(response=> response.json())
          .then(data=> {setEvents(data)
          handleEvent(data)})
          
        }, [user])

        function handleLogout(){
            fetch('/logout', 
            { method: 'DELETE' })
            .then((r)=>{
                if(r.ok){
                    setUser()
                    navigate('/')
                }
            })
        }
    
    return(
        <div className="main-page">
        <Row>
            <Col><h1></h1>
        </Col>
            <Col>
        <h1>Hello, {user.first_name}</h1>
        </Col>
        <Col>
        <Button style={{borderRadius:50, border: 0, backgroundColor: 'rgb(0,193,162)', fontSize: 20}} onClick={()=>navigate('/page')}>Manage Account</Button>
        <Button style={{borderRadius:50, border: 0, backgroundColor: 'rgb(0,193,162)', fontSize: 20}} onClick={()=>handleLogout()}>Logout</Button>
        </Col>
        </Row>
        <button  className='invisible-button' onClick={() => speechHandler(msg)}><Player hover loop
                    src="https://assets5.lottiefiles.com/packages/lf20_2zrnh8ut.json"
                    style={{ height: '150px', width: '150px' }}
                    
                  >
                  <Controls  visible={false} buttons={['play', 'hover', 'frame', 'debug']} />
                  </Player></button>
        
        <h4>These are the medicines you need to take today:</h4>
        <Container className="p-1">
        <Row >
        { events.map(event=><Col xs={12} sm={6} md={4}>
                    <EventCard event={event} key={event.id} change={change} setChange={setChange}></EventCard>
                    </Col>)}
        </Row>
        </Container>
        </div>
    )
}


export default Home