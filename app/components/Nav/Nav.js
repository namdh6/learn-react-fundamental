import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import './Nav.css';


const propTypes = {};

const defaultProps = {};

const Nav = props => (
    <ul className='nav'>
        <li>
            <NavLink exact activeClassName='active' to='/'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/battle'>
                Battle
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/Popular'>
                Popular
            </NavLink>
        </li>
    </ul>
);

Nav.propTypes = propTypes;

Nav.defaultProps = defaultProps;

export default Nav;
