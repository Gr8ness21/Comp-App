import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Cities from "./components/Cities"
import Parks from "./components/Parks"

class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Route path="/parks" component={Parks}/>
          <Route path="/cities" component={Cities}/>
        </div>
      </Router>
    )
  }
}

export default App;
