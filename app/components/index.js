import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Router, Route, hashHistory ,IndexRoute,Link} from 'react-router';
import {wrapper} from './app';
import Detail from './detail';
import List from './list';
import {Provider,connect} from 'react-redux';
import  store from '../store';
require('../static/bstp.scss');
require('../static/index.scss');
class Approot extends  Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={wrapper}>
                    <IndexRoute  component={List}/>
                    <Route path='/detail' component={Detail}></Route>
                </Route>
            </Router>
        )
    }
}
// const Container = connect()(Approot)
ReactDOM.render(
    (
        <Provider store={store}>
            <Approot/>
        </Provider>
    ),
    document.getElementById('app')
)
