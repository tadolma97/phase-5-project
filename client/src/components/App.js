import '../App.css';
import React, { useState, useEffect } from "react"; 
import AddMedicine from './AddMedicine';
import NewHome from './NewHome';
import AddHelper from './AddHelper';
import Login from './Login';
import Home from './Home';
import MoreMedicine from './MoreMedicine';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  
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
        <Route path="/form" element={<AddMedicine/>}/>
        <Route path="/home" element={<Home user={user}/>}/>
        <Route path="/newhome" element={<NewHome/>}/>
        <Route path="/addhelper" element={<AddHelper user={user}/>}/>
        <Route path="/moremedicine" element={<MoreMedicine/>}/>
      </Routes>
    </div>
  );
}

export default App;
