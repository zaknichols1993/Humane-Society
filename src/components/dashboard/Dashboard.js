import React, { Component } from 'react';
import Notifications from './Notifications';
import DogList from '../dogs/DogList';

class Dashboard extends Component {
    render() {
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m3 offset-m1">
            <DogList />
            </div>
            <div className="col s12 m3 offset-m1">
            <DogList />
            </div>
            <div className="col s12 m3 offset-m1">
            <Notifications />
            </div>
          </div>
        </div>
      )
    }
  }

export default Dashboard;