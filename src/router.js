import React, { Fragment} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from "./views/home/Home";


const AppRouter = () => (
    <Router>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/about" component={About}/>*/}
        {/*<Route path="/topics" component={Topics}/>*/}
    </Router>
);

export default AppRouter
