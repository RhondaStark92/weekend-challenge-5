import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feedback extends Component {

    componentDidMount() {
        // Do I need to do anything here?
        console.log('in feedback', this.props.match.params.id);
    }

    handleSubmit = (path) => {
        this.props.history.push(path);
    }

    render() {
        let pageHeading;
        let button;
        let nextPage;   
        let questionPrompt;
        let i;
        const questions = [
            'How are you feeling today?',
            'How well are you understanding the content?',
            'How well are you being supported?',
            'Would you like to leave any comments?'
        ];

        // if id is undefined then it's the home page, i.e. first page
        if(typeof this.props.match.params.id === "undefined") {
            i = 0;
            pageHeading = <p>1 of 4 pages</p>;
            button = <button onClick={ () => {this.handleSubmit('/1')}}>Next 1</button>
        } else {
            // is a number so convert the parameter to a number
            let pageNum = parseInt(this.props.match.params.id);
            
            if (pageNum === 1 || pageNum === 2 || pageNum === 3 ) {
                i = pageNum;
                nextPage = '/' + (pageNum + 1);
                pageHeading = <p>{pageNum + 1} of 4 pages</p>;
                button = <button onClick={ () => {this.handleSubmit(nextPage)}}>Next {pageNum + 1}</button>
            } else if (pageNum === 4) {
                i = 4;
                pageHeading = <p>Thanks!</p>;
                button = <button onClick={ () => {this.handleSubmit('/')}}>Start Again</button>
            } else {
                // not a page we have .. not sure what to do .. give 404 error here?
            };
        };
        questionPrompt = <h2>{questions[i]}</h2>;

        // refresh the DOM
        return (
            <div>
                {pageHeading}
                {questionPrompt}
                <input placeholder="Enter 1 to 5" name ="feelingAnswer"></input>
                {button}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Feedback);