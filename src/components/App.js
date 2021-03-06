import React, { Component } from 'react';

import uwLogo from '../static/uw_logo.png';
import '../static/main.css'
import '../App.css';
import UniqueForm from './UniqueForm'

class App extends Component {
  render() {
    return (

      <div className="App">
        <div class="jumbotron text-center" id="purple-background">
          <div class="container">
            <div className="uw_logo">
              <img src={uwLogo} alt="UW Logo"/>
            </div>
              <div class="container">
                <div class="page-title">
                  <h1>Ghetto Uniqueness Calculator</h1>
                  {/* <p class="lead">Enter your submission for uniqueness ranking!</p> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <UniqueForm/>
          </div>
    </div>
    );
  }
}

export default App;
