import '../App.css';
import React, { useState, useEffect } from "react"; 
import NewHome from './NewHome';
import AddHelper from './AddHelper';
import Login from './Login';
import Home from './Home';
import MoreMedicine from './MoreMedicine';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import AddMedicine from './AddMedicine';
import MainPage from './MainPage';
import 'react-pro-sidebar/dist/css/styles.css';
import Page from './Page';


function App() {
  const [user, setUser] = useState()
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <MainPage></MainPage>
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/form" element={<AddMedicine user={user} />}/> */}
        <Route path="/home" element={<Home user={user} setUser={setUser}/>}/>
        <Route path="/newhome" element={<NewHome user={user}/>}/>
        <Route path="/addmedicine" element={<AddMedicine  user={user}/>}/>
        <Route path="/addhelper" element={<AddHelper user={user}/>}/>
        <Route path="/moremedicine" element={<MoreMedicine user={user}/>}/>
        <Route path="/" element={<MainPage setUser={setUser}/>}/>
        <Route path="/page" element={<Page user={user} setUser={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
