import React from 'react';
import PropTypes from 'prop-types';
import PlayerProfile from '../PlayerProfile/PlayerProfile';

const propTypes = {};

const defaultProps = {};

const Player = props => (
    <div>
        <h1 className='header'>
            {props.label}
        </h1>
        <h3 style={{textAlign: 'center'}}>
            Score: {props.score}
        </h3>
        <PlayerProfile info={props.profile}/>
    </div>
);

Player.propTypes = propTypes;

Player.defaultProps = defaultProps;

export default Player;
