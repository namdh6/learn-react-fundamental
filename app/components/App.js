import React, { PropTypes } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Popular from './Popular/Popular';
import Battle from './Battle/Battle';
import Nav from './Nav/Nav';
import BattleResult from './BattleResult/BattleResult';

const propTypes = {};

const defaultProps = {};

const App = props => (
    <Router>
        <div className='container'>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/battle' component={Battle} />
                <Route path='/battle/results' component={BattleResult} />
                <Route path='/popular' component={Popular} />
                <Route render={() => (<p> Not Found </p>)} />
            </Switch>
        </div>
    </Router>
);

App.propTypes = propTypes;

App.defaultProps = defaultProps;

export default App;
