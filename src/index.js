import React from 'react';
import ReactDom from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Components/Main';

import './main.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from  './Redux/Reducers/combine';

const store = createStore(rootReducer, composeWithDevTools());
console.log(store);


ReactDom.render(<Provider store={store}><Router><Main /></Router></Provider>, document.getElementById('root'));