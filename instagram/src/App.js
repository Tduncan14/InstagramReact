import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signin from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import Profile from './components/Screens/Profile';
import Home from './components/Screens/Home';
import Create from './components/Screens/Createpost';

function App() {
  return (
    <Router>
      <Navbar />

  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/> 
         
      <Route path="/signin" element={<Signin/>}/> 
   
      <Route path="/profile" element={<Profile/>}/>

      <Route path="/create" element={<Create/>}/>
    
 
 </Routes>

    </Router>
  );
}

export default App;
