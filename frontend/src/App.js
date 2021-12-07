import PhoneList from './components/PhoneList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Phones from './Screens/Phones';
import AddPhones from './Screens/AddPhones';
import NavbarApp from './Navbar/Navbar';
import DetailsPhone from './Screens/DetailsPhone';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div className="App"  >
    <NavbarApp />
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Phones/>} />
      </Routes>
      <Routes>
        <Route path="/addPhones" caseSensitive={false} element={<AddPhones/>} />
      </Routes>
      <Routes>
        <Route path="/phoneDetails" caseSensitive={false} element={<DetailsPhone/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
