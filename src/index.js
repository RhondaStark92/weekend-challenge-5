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

// Create Store
const reduxStore = createStore(
    combineReducers({
      feedbackReducer
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(
    <Provider store={reduxStore}>
      <App />
    </Provider>, 
    document.getElementById('root'));
  
registerServiceWorker();
