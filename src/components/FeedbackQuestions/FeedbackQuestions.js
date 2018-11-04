import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class FeedbackQuestions extends Component {

    componentDidMount() {
        // Do I need to do anything here?
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
        let questionPrompt;
        const questions = [
            'How are you feeling today?',
            'How well are you understanding the content?',
            'How well are you being supported?',
            'Would you like to leave any comments?'
        ];

        // refresh the DOM
        return (
            <h2>{questions[i]}</h2>
        );
    }
}

export default withRouter(FeedbackQuestions);

