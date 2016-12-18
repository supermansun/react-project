import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Router, Route, hashHistory ,IndexRoute,Link} from 'react-router';
import {wrapper} from './app';
import Detail from './detail';
import List from './list';
require('../static/bstp.scss');
require('../static/index.scss')
ReactDOM.render(
    (<Router history={hashHistory}>
        <Route path='/' component={wrapper}>
            <IndexRoute  component={List}/>
            <Route path='/detail' component={Detail}></Route>
        </Route>
    </Router>),
    document.getElementById('app')
)
