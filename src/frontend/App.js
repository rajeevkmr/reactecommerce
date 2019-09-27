import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Layout from './components/includes/Layout';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="app row pt-5">
        <Router>
          <Switch>
            <Route exact path="/" render={()=><Layout><Home /></Layout>} />
          </Switch>
          
        </Router>
        
        
      </div>
    );
  }
}

export default App;