import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class FeedbackAnswer extends Component {

    componentDidMount() {
        // Do I need to do anything here?
        // console.log('in feedback', this.props.match.params.id);
        // // Get the page number for the path we're on from Redux
        // this.props.dispatch({ type: 'GET_PAGENUMBER', payload: this.props.match.params.id});
        // // console.log('in feedback after dispatch', pageNumber);
    }

    render() {

        let path = this.props.match.params.id;
        let i = 0;
        if (typeof path === "undefined") {
            i = 0;
        } else {
            // is a number so convert the parameter string to a number
            i = parseInt(path);
        }
        // refresh the DOM
        return (
            (i !== 4) ? <input placeholder="Enter 1 to 5" name ="feelingAnswer"></input> : ''
        );
    }
}

// const mapStateToProps = reduxState => ({ reduxState });

export default withRouter(FeedbackAnswer);

