import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
// import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';
// import Feedback from '../Feedback/Feedback';


class App extends Component {
  
  componentDidMount() {
    // Do I need to do anything here?
    console.log('in app component mount');
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(App);