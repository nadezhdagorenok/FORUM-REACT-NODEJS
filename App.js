"use strict";
require('es6-promise').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

ReactDOM.render(
    <HashRouter>
        <div>
            <PagesLinks/>
            <PagesRouter />

        </div>
    </HashRouter>
, document.getElementById('container'));

