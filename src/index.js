import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Components/Main';

import './main.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from  './Redux/Reducers/combine';

import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store);


ReactDom.render(<Provider store={store}><Router><Main /></Router></Provider>, document.getElementById('root'));