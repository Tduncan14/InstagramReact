import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route,Routes as Switch} from 'react-router-dom';
import Signin from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import Profile from './components/Screens/Profile';
import Home from './components/Screens/Home';

function App() {
  return (
    <Router>
      <Navbar />

  <Switch>
      <Route path="/" element={<Home/>}/>
        
      <Route path="/signup" element={<Signup/>}/>
         
      <Route path="/signin" element={<Signin/>}/>
     
   
      <Route path="/profile" element={<Profile/>}/>
    
 
 </Switch>

    </Router>
  );
}

export default App;
