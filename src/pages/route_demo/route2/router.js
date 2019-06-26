import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Main from "./Main";
import About from "../route1/about";
import Topic from "../route1/topic";
import Home from './Home';

class IRouter extends Component {
    render() {
        return(
            <Router>
                <Home>
                    <Route path='/main' render={() =>
                        <Main>
                            <Route path='/main/a' component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topics' component={Topic}></Route>
                </Home>
            </Router>
        )
    }
}

export default IRouter;