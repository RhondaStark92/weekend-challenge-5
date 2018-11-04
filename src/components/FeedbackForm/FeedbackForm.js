import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class FeedbackForm extends Component {

    state = {
        feelingAnswer: '',

    }

    componentDidMount() {
        // Do I need to do anything here?
    }

    //takes answer from input and set in state
    handleChange = (event) => {
        console.log('on change');
        this.setState({
            feelingAnswer: event.target.value,
        })      
    }

    handleSubmit(path) {
        // Send the local state of the entry to Redux 
        // to save for the final submit button

        // console.log('in click button', path);
        this.props.history.push(path);
    }

    render() {
        const reduxState = this.props.reduxState;
        let nextPath = reduxState.pageNumberReducer.nextPath;
        console.log('NEXTPATH FROM REDUX', nextPath);
        
       
        // let path = 0;
        let i = 0;
        // let nextPath = '';
        // if (typeof path === "undefined") {
        //     nextPath = '/1'
        //     i = 0;
        // } else if (path === '4') {
        //     nextPath = '/'
        //     i = 4;
        // } else {
        //     // is a number so convert the parameter to a number
        //     nextPath = '/' + (parseInt(path) + 1);
        //     i = parseInt(path);
        // }
        console.log('nextpath', nextPath);
        
        // refresh the DOM
        return (
            <form>
                {(i !== 4) ? <input placeholder="Enter 1 to 5" name ="feelingAnswer"></input> : ''}
                <button onClick= { () => this.handleSubmit(nextPath)}>Next</button>
            </form>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(FeedbackForm);
