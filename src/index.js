import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Components/Main';

import './main.css';


ReactDom.render(<Router><Main /></Router>, document.getElementById('root'));