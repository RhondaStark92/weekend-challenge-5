import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class FeedbackPageNumber extends Component {

    render() {
        let path = this.props.match.params.id;
        let pageNumber = 0;
        if (typeof path === "undefined") {
            pageNumber = 1;
        } else {
            // is a number so convert the parameter string to a number
            pageNumber = parseInt(path) + 1;
        }

        // let pageNumber = this.props.reduxState.pageNumberReducer.page;
        // console.log('FeedbackPageNumber component', pageNumber)
        
        // refresh the DOM
        return (
            // <div>
            (pageNumber != 5) ?  <p>Page {pageNumber} of 4.</p> : <h2>Thanks for the feedback!</h2>
            // </div>
        );
    }
}

export default withRouter(FeedbackPageNumber);