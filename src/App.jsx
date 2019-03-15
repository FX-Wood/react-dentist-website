import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import ProcedureShow from './ProcedureShow'
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    const tx = [
      { id:1, proc:'Deep Clean'},
      { id:2, proc:'Filling'},
      { id:3, proc:'Crown'},
      { id:4, proc:'Root Canal'},
      { id:5, proc:'Deep Route Canal'}
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
          <Route exact path='/procedures' render={() => <Procedures tx={tx}/>} />
          <Route path='/contact' render={() => <Contact />} />
          <Route path='/procedures/:id' render={(props) => <ProcedureShow tx={tx} {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
