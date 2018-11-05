import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Create reducer
const feedbackReducer = (state = [], action) => {
    console.log('In reducer');
    if ( action.type  === 'SET_FEEDBACK' ) {
      // action payload should be the array from the server
      return action.payload;
    }
    if ( action.type  === 'GET_FEEDBACK' ) {
        // action payload should be the array of feedback from the server
        return action.payload;
    }
    // For any other action type, just return the current state
    console.log('final state', state);
    return state;
  }

  // Store the page number we're on
  const pageNumberReducer = (state = {}, action) => {
    if ( action.type  === 'GET_PAGENUMBER' ) {
        console.log('PAGENUMBERREDUCER', action.payload);
        let pageNum = 1;
        let nextButton = 'Next';
        let nextPath = '/1';
        // action payload should be the array from the server
        if (typeof action.payload === "undefined") {
            pageNum = 1;
            nextButton = 'Next';
            nextPath = '/1'
        } else if (action.payload === '4') {
            pageNum = 4;
            nextButton = 'Start Again';
            nextPath = '/'
        } else {
            // is a number so convert the parameter to a number
            pageNum = parseInt(action.payload) + 1;
            nextButton = 'Next';
            nextPath = '/' + (pageNum + 1);
        }
        return {
            'pageNum': pageNum,
            'nextButton': nextButton,
            'nextPath': nextPath
        };
    }
    // console.log('final state', state);
    // For any other action type, just return the current state
    return state;
}

// Create Store
const reduxStore = createStore(
    combineReducers({
      feedbackReducer,
      pageNumberReducer
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(
    <Provider store={reduxStore}>
      <App />
    </Provider>, 
    document.getElementById('root'));
  
registerServiceWorker();
