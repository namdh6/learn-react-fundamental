import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const propTypes = {};

const defaultProps = {};

const Home = props => (
    <div className='home-container'>
        <h1>Github Battle: Battle your friends...and stuff.</h1>

        <Link className='button' to='/battle'>
            Battle
        </Link>
    </div>
);

Home.propTypes = propTypes;

Home.defaultProps = defaultProps;

export default Home;
