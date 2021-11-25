import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Signin from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import Profile from './components/Screens/Profile';
import Home from './components/Screens/Home';
import Create from './components/Screens/Createpost';

function App() {
  return (
    <Router>
      <Navbar />

  <Switch>
      <Route path="/" component={Home}/>
        
      <Route path="/signup" component={Signup}/>
         
      <Route path="/signin" component={Signin}/>
     
   
      <Route path="/profile" component={Profile}/>

      <Route path="/create" component={Create}/>
    
 
 </Switch>

    </Router>
  );
}

export default App;
