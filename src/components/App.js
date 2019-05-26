import React, { Component } from 'react';
import Toolbar from './toolbar';
import EmployeesList from './employeesList';
import FilterPanel from './filter';
import EmployeeCard from './employeeCard';
import '../styles/App.css';
import {Router, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();


export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="container">
                    <Toolbar />
                    <Route path="/filter" component={FilterPanel}/>
                    <Route path="/employee" component={EmployeeCard}/>
                    <EmployeesList />
                </div>
            </Router>
        );
    }
}