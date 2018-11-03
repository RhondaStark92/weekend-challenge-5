import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feedback extends Component {
// Can I somehow use condition logic within this component
// so I don't have to have multiple components for each question?? 

    componentDidMount() {
        // Do I need to do anything here?
        console.log('in feedback', this.props.match.params.id);
    }

    render() {
        let pageHeading;
        // if id is undefined then it's the home page, i.e. first page
        if(typeof this.props.match.params.id === "undefined") {
            pageHeading = <p>1 of 4 pages</p>;
        } else {
            // is a number so convert the parameter to a number
            let pageNum = parseInt(this.props.match.params.id);
            console.log('pageNum', pageNum);
            
            if (pageNum === 1 || pageNum === 2 || pageNum === 3 ) {
                pageHeading = <p>{pageNum + 1} of 4 pages</p>;
            } else if (pageNum === 4) {
                pageHeading = <p>Thanks!</p>;
            } else {
                // not a page we have .. not sure what to do .. give 404 error here?
            }
        };
        // refres the DOM
        return (
            <div>
                {pageHeading}
                <h2>How are you feeling today?</h2>
                <input placeholder="Enter 1 to 5" name ="feelingAnswer"></input>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Feedback);