import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feedback extends Component {

    state = {
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: ''
    }

    componentDidMount() {
        // Do I need to do anything here?
        console.log('in feedback', this.props.match.params.id);
    }

    //takes answer from input and set in state
    handleChange = (event) => {
        this.setState({
          ...this.state,
          feeling: event.target.value
        })
    }

    handleNext = (event) => {
        // Send the local state of the entry to Redux 
        // to save for the final submit button
        event.preventDefault();
        console.log('in click next button', event.target.value);
        this.props.history.push(event.target.value);
    }

 
    handleSubmit = (event)  => {
        // Send the local state of the entry to Redux 
        // to save for the final submit button
        event.preventDefault();
        console.log('in click submit button', event.target.value);
        this.props.history.push(event.target.value);
        // Update the page number information
        // this.props.dispatch({ type: 'GET_PAGENUMBER', payload: this.props.match.params.id});
    }

    render() {
        let pageNumber;
        const questions = [
            'How are you feeling today?',
            'How well are you understanding the content?',
            'How well are you being supported?',
            'Would you like to leave any comments?'
        ];
        let nextPath;
        let button;
        let inputSection;

        if (typeof this.props.match.params.id === "undefined") {
            // first time in set pageNumber to 1
            pageNumber = 1;
        } else {
            pageNumber = parseInt(this.props.match.params.id);
        }
        
        nextPath = '/' + (pageNumber + 1);
        button = <button value={nextPath} onClick={this.handleNext}>Next</button>;
        let pageHeader = <p>Page {pageNumber} of 4.</p>
        inputSection = <input placeholder="Enter 1 to 5" name ="inputEntry"></input>

        switch (pageNumber) {
           case 4:
                inputSection = <input placeholder="Your message here." name ="inputEntry"></input>
                button = <button value={nextPath} onClick={this.handleSubmit}>Submit</button>
                break;
            case 5:
                nextPath = '/';
                inputSection = '';
                pageHeader = <h2>Thanks for the feedback!</h2>;
                button = <button value={nextPath} onClick={this.handleNext}>New Feedback</button>
            default:
        }
        // refresh the DOM
        return (
            <div>
                {pageHeader}
                <h2>{questions[pageNumber - 1]}</h2>
                {inputSection}
                {button}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(Feedback);

