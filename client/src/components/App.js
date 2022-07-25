import '../App.css';
import AddMedicine from './AddMedicine';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <AddMedicine></AddMedicine>
    </div>
  );
}

export default App;
