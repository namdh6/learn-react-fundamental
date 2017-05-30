import React from 'react';
import PropTypes from 'prop-types';
import './RepoGrid.css';

const propTypes = {
    repos: PropTypes.array.isRequired
};

const defaultProps = {};

const RepoGrid = props => (
    <ul className='popular-list'>
        {props.repos.map((repo, index) => {
            return (
                <li key={repo.name} className='popular-item'>
                    <div className='popular-rank'>#{index + 1} </div>
                    <ul className='space-list-items'>
                        <li>
                            <img
                                className='avatar'
                                src={repo.owner.avatar_url}
                                alt={'Avatar for ' + repo.owner.login}
                            />
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>
            )
        })}
    </ul>
);

RepoGrid.propTypes = propTypes;

RepoGrid.defaultProps = defaultProps;

export default RepoGrid;

