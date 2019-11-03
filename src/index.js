import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import logger from 'redux-logger'

const defaultFeedBack = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
    flagged: false,
}

const feedBackReducer = (state = defaultFeedBack, action) => {
    if(action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload,}
    }
    else if(action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: action.payload,}
    }
    else if(action.type === 'ADD_SUPPORT') {
        return {...state, support: action.payload,}
    }
    else if(action.type === 'ADD_COMMENT') {
        return {...state, comments: action.payload,}
    }
    else if(action.type === 'ADD_FLAGGED') {
        return {...state, flagged: true,}
    }
    return state;
}

const totalFeedBack = (state = [], action) => {
    if(action.type === 'ADD_TOTALFEEDBACK') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedBackReducer,
        totalFeedBack,
    }),
    applyMiddleware(logger),
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
