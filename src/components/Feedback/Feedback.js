import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

class Feedback extends Component {

    state = emptyFeedback;

    componentDidMount() {
        // Do I need to do anything here?
        console.log('in feedback');
        
    }

    //takes answer from input and set in state
    handleChange = (event) => {
        // console.log('in handle change');
        // console.log('state before setState', event);
        this.setState({
            [event.target.name]: event.target.value,
        });
        // console.log('state after', this.state);
    }

    // handleChangeFeeling = (event) => {
    //     console.log('feeling', event.target.value);
    //     this.setState({
    //         ...this.state,
    //         feeling: event.target.value
    //     })
    // }

    // handleChangeUnderstanding = (event) => {
    //     this.setState({
    //         ...this.state,
    //         understanding: event.target.value
    //     })
    // }

    // handleChangeSupport = (event) => {
    //     this.setState({
    //         ...this.state,
    //         support: event.target.value
    //     })
    // }

    // handleChangeComments = (event) => {
    //     this.setState({
    //         ...this.state,
    //         comments: event.target.value
    //     })
    // }

    handleNext = (event) => {
        // Send the local state of the entry to Redux 
        // to save for the final submit button
        event.preventDefault();
        // console.log('in click next button', event.target.value);
        this.props.history.push(event.target.value);
    }

 
    handleSubmit = (event)  => {
        event.preventDefault();
        let nextPath = '';
        console.log('in click submit button', this.state, this.props.match.params.id);
        if (typeof this.props.match.params.id === "undefined") {
            // first time in set pageNumber to 1
            nextPath = '/2';
        } else if (this.props.match.params.id == 5) {
            nextPath = '/';
            console.log('in last line');
            this.setState({emptyFeedback});
        } else {
            nextPath = '/' + (parseInt(this.props.match.params.id)+1);
        }
        this.props.history.push(nextPath);
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
        let inputButton;
        console.log('check id', this.props.match.params.id);
        if (typeof this.props.match.params.id === "undefined") {
            // first time in set pageNumber to 1
            pageNumber = 1;
        } else {
            pageNumber = parseInt(this.props.match.params.id);
        }
        
        nextPath = '/' + (pageNumber + 1);
        // button = <button value={nextPath} 
        //     onClick={this.handleNext}>Next</button>;
        inputButton = <input type="submit" value="Next" name={nextPath} />
        let pageHeader = <p>Page {pageNumber} of 4.</p>

        switch (pageNumber) {
            case 1:
                inputSection = <input onChange={this.handleChange}
                    placeholder="Enter 1 to 5" name="feeling"></input>
                break;
            case 2:
                inputSection = <input onChange={this.handleChange}  
                    placeholder="Enter 1 to 5" value={this.state.understanding} name ="understanding"></input>
                break;
            case 3:
                inputSection = <input onChange={this.handleChange} 
                    placeholder="Enter 1 to 5" value={this.state.support} name ="support"></input>
                break;
            case 4:
                inputSection = <input onChange={this.handleChange} 
                    placeholder="Your message here." value={this.state.comments} name ="comments"></input>
                // button = <button value={nextPath} 
                //     onClick={this.handleSubmit}>Submit</button>
                inputButton = <input type="submit" value="Submit" name={nextPath} />
                break;
            case 5:
                nextPath = '/';
                inputSection = '';
                pageHeader = <h2>Thanks for the feedback!</h2>;
                inputButton = <input type="submit" value="New Feedback" name={nextPath} />
                // button = <button value={nextPath} 
                //     onClick={this.handleNext}>New Feedback</button>;
                break;
            default:
        }
        // refresh the DOM
        return (
            <div>
                {pageHeader}
                <h2>{questions[pageNumber - 1]}</h2>
                <form onSubmit={this.handleSubmit}>
                    {inputSection}
                    {inputButton}
                </form>
                {/* {button} */}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(Feedback);

