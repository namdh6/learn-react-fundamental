import React from 'react';
import PropTypes from 'prop-types';

import './Badge.css';

const propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
};

const defaultProps = {
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    name: 'Tyler McGinnis',
    userName: 'tylermcginnis'
};

const Badge = props => (
    <div>
        <img
            className='badge-avatar'
            src={props.img}
            alt='Avatar'
        />
        <h1>Name: {props.name}</h1>
        <h3>username: {props.userName}</h3>
    </div>
);

Badge.propTypes = propTypes;

Badge.defaultProps = defaultProps;

export default Badge;

