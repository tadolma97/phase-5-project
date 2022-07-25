import '../App.css';
import AddMedicine from './AddMedicine';
import NewHome from './NewHome';
import Login from './Login';
import Home from './Home';
import MoreMedicine from './MoreMedicine';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/form" element={<AddMedicine/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/newhome" element={<NewHome/>}/>
        <Route path="/moremedicine" element={<MoreMedicine/>}/>
      </Routes>
    </div>
  );
}

export default App;
