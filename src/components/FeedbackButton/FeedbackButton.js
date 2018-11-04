import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class FeedbackButton extends Component {

    state = {}

    componentDidMount() {
        // Do I need to do anything here?
    }

    handleSubmit(path) {
        // Send the local state of the entry to Redux 
        // to save for the final submit button

        // console.log('in click button', path);
        this.props.history.push(path);
    }

    render() {
        let path = this.props.match.params.id;
        let i = 0;
        let nextPath = '';
        if (typeof path === "undefined") {
            nextPath = '/1'
            i = 0;
        } else if (path === '4') {
            nextPath = '/'
            i = 4;
        } else {
            // is a number so convert the parameter to a number
            nextPath = '/' + (parseInt(path) + 1);
            i = parseInt(path);
        }
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

export default withRouter(FeedbackButton);