import '../App.css';
import React, { useState, useEffect } from "react"; 
import NewHome from './NewHome';
import AddHelper from './AddHelper';
import Login from './Login';
import Home from './Home';
import MoreMedicine from './MoreMedicine';
import UserProfile from './UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null)
  const [events, setEvents]=useState([])
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user)
  if (!user) return <div></div>
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        {/* <Route path="/form" element={<AddMedicine user={user} />}/> */}
        <Route path="/" element={<Home user={user} events={events} setEvents={setEvents}/>}/>
        <Route path="/newhome" element={<NewHome user={user}/>}/>
        <Route path="/addhelper" element={<AddHelper user={user}/>}/>
        <Route path="/moremedicine" element={<MoreMedicine user={user}/>}/>
        <Route path="/userprofile" element={<UserProfile user={user} events={events}/>}/>
      </Routes>
    </div>
  );
}

export default App;
