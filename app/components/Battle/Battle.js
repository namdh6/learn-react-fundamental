import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Battle.css';
import { Link } from 'react-router-dom';

import PlayerInput from '../PlayerInput/PlayerInput';
import PlayerPreview from '../PlayerPreview/PlayerPreview';
import BattleResult from '../BattleResult/BattleResult';

const propTypes = {};

const defaultProps = {};

class Battle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleSubmit(id, username) {
        let newState = {
            [id + 'Name']: username,
            [id + 'Image']: 'https://github.com/' + username + '.png?size=200'
        };
        this.setState(() => newState);
    }
    handleReset(id) {
        let newState = {
            [id + 'Name']: '',
            [id + 'Image']: null
        };
        this.setState(() => newState);
    }
    render() {
        let { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = this.state;
        let { match } = this.props;

        return (
            <div>
                <div className='row'>
                    {!playerOneName &&
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            onSubmit={this.handleSubmit}
                        />}
                    {playerOneImage !== null &&
                        <PlayerPreview avatar={playerOneImage} username={playerOneName}>
                            <button className='reset' onClick={this.handleReset.bind(null, 'playerOne')}>
                                Reset
                            </button>
                        </PlayerPreview>}
                    {!playerTwoName &&
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.handleSubmit}
                        />}
                    {playerTwoImage !== null &&
                        <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
                            <button className='reset' onClick={this.handleReset.bind(null, 'playerTwo')}>
                                Reset
                            </button>
                        </PlayerPreview>}
                </div>

                {playerOneImage && playerTwoImage &&
                    <Link className='button'
                        to={{
                            pathname: match.url + '/results',
                            search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                        }}>
                        Battle
                    </Link>}

            </div>

        );
    }
}

Battle.propTypes = propTypes;

Battle.defaultProps = defaultProps;

export default Battle;
