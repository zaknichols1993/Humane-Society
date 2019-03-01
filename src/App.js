import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import DogDetails from './components/dogs/DogDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dog/:id' component={DogDetails} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
