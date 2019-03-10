import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./views/home/Home";
import Add from "./views/add/Add";
import Playground from "./views/playground/Playground";
import Search from "./views/search/Search";


const AppRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={Add}/>
            <Route path="/search" component={Search}/>
            <Route path="/playground" component={Playground}/>
        </div>
    </Router>
);

export default AppRouter
