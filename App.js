"use strict";
require('es6-promise').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';
import {  HashRouter } from 'react-router-dom';
import PagesRouter from './pages/PagesRouter';

ReactDOM.render(
    <HashRouter>
        <div>
            <PagesRouter />
        </div>
    </HashRouter>
, document.getElementById('container') );

