import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FeedbackPageNumber from '../FeedbackPageNumber/FeedbackPageNumber';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import FeedbackQuestions from '../FeedbackQuestions/FeedbackQuestions';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
// import FeedbackAnswer from '../FeedbackAnswer/FeedbackAnswer';

class Feedback extends Component {

    // state = {
    //     path: '1',
    // }

    componentDidMount() {
        // Do I need to do anything here?
        console.log('in feedback', this.props.match.params.id);
        // Get the page number for the path we're on from Redux
        this.props.dispatch({ type: 'GET_PAGENUMBER', payload: this.props.match.params.id});
        // console.log('in feedback after dispatch', pageNumber);
    }

    render() {
        let i = 0;
        if (typeof this.props.match.params.id === "undefined") {
            i = 0;
        } else {
            // is a number so convert the parameter string to a number
            i = parseInt(this.props.match.params.id);
        }
        // refresh the DOM
        return (
            <div>
                <FeedbackPageNumber />
                <FeedbackQuestions />
                <FeedbackForm />
                {/* <FeedbackAnswer /> */}
                {/* {(i !== 4) ? <input placeholder="Enter 1 to 5" name ="feelingAnswer"></input> : ''} */}
                {/* <FeedbackButton /> */}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Feedback);

