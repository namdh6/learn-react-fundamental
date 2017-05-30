import React, { Component } from 'react';
import querryString from 'query-string';
import { battle } from '../../utils/api';
import Player from '../Player/Player';
import Loading from '../Loading/Loading';

const propTypes = {};

const defaultProps = {};

class BattleResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        };
    }

    componentDidMount() {
        let players = querryString.parse(this.props.location.search);
        battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(results => {
            if (results === null) {
                return this.setState(() => {
                    return {
                        error: 'Look like there was error. Check that both users exist on Github',
                        loading: false
                    }
                });
            }
            this.setState(() => (
                {
                    error: null,
                    winner: results[0],
                    loser: results[1],
                    loading: false
                }));
        });
    }

    render() {
        const error = this.state.error;
        const winner = this.state.winner;
        const loser = this.state.loser;
        const loading = this.state.loading;
        
        if (loading === true) {
            return <Loading />
        }

        if (error) {
            return (
                <div>
                    <p> {this.state.error} </p>
                </div>
            )
        }

        return (
            <div className='row'>
                <Player
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}
                />
                <Player
                    label='Loser'
                    score={loser.score}
                    profile={loser.profile}
                />
            </div>
        );
    }
}

BattleResult.propTypes = propTypes;

BattleResult.defaultProps = defaultProps;

export default BattleResult;
