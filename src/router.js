import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./views/home/Home";
import Add from "./views/add/Add";


const AppRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={Add}/>
        </div>
    </Router>
);

export default AppRouter