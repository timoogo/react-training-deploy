import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Static
import Loading from '../components/loader/Loading';
import NoMatch from './NoMatch';

// Lazy Import
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));


const Rooter = () => (
    <Suspense fallback={<Loading/>}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </Router>
    </Suspense>
);

export default Rooter;