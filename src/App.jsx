import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    const tx = [
      'Deep Clean',
      'Filling',
      'Crown',
      'Root Canal',
      'Deep Route Canal'
    ]
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link> |{' '}
            <Link to='/procedures'>Procedures</Link> |{' '}
            <Link to='/contact'>Contact</Link>
          </nav>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/procedures' render={() => <Procedures tx={tx}/>} />
          <Route path='/contact' render={() => Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
