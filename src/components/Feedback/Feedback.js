import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class Feedback extends Component {
// Can I somehow use condition logic within this component
// so I don't have to have multiple components for each question??  
   render() {
    return (
      <div>
          <h2>How are you feeling today?</h2>
          <input placeholder="Enter 1 to 5" name ="feelingAnswer"></input>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Feedback);