import Navbar from './components/layout/Navbar';
import React  from 'react';
import  Alert  from './components/layout/Alert';
import  {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import User from './components/users/User';
import About from './pages/About';
import './App.css';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlerState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
      return (
        <GithubState>
        <AlertState>
        <Router>
        <div className="App">
          
        <Navbar />
        <Alert/>
        <Switch>
          <Route exact path = '/'component = {Home} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/user/:login' component = {User} />       
          <Route component = {NotFound} />
          </Switch>
        
        
      </div>
      </Router>
      </AlertState>
      </GithubState>
  );
}
  


export default App;
