import React, { Component } from 'react';
import Notifications from './Notifications';
import DogList from '../dogs/DogList';
import CatList from '../cats/CatList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
      const { dogs } = this.props;
      const { cats } = this.props;
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m3 offset-m1">
            <DogList dogs={dogs} />
            </div>
            <div className="col s12 m3 offset-m1">
            <CatList cats={cats} />
            </div>
            <div className="col s12 m3 offset-m1">
            <Notifications />
            </div>
          </div>
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    dogs: state.dog.dogs,
    cats: state.cat.cats
  }
}


export default connect(mapStateToProps)(Dashboard);