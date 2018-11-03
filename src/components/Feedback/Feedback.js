import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feedback extends Component {
// Can I somehow use condition logic within this component
// so I don't have to have multiple components for each question?? 

    componentDidMount() {
        // Do I need to do anything here?
        console.log('in feedback', this.props.match.params.id);
        if (this.props.match.params.id == '1') {
            
        }
    }

    render() {
        let heading;

        if(typeof this.props.match.params.id == "undefined") {
            heading = <p>1 of 4 pages</p>;
        } else if (this.props.match.params.id == '1') {
            heading = <p>2 of 4 pages</p>;
        } else if (this.props.match.params.id == '2') {
            heading = <p>3 of 4 pages</p>;
        } else if (this.props.match.params.id == '3') {
            heading = <p>4 of 4 pages</p>;
        } else if (this.props.match.params.id == '4') {
            heading = <p>Thanks!</p>;
        }

        return (
        <div>
            
            {heading}
            <h2>How are you feeling today?</h2>
            <input placeholder="Enter 1 to 5" name ="feelingAnswer"></input>
        </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Feedback);