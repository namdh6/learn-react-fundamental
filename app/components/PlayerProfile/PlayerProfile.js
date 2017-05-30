import React from 'react';
import PropTypes from 'prop-types';

import PlayerPreview from '../PlayerPreview/PlayerPreview';

const propTypes = {
    info: PropTypes.object.isRequired
};

const defaultProps = {};

const PlayerProfile = props => {
    const { info } = props;
    return (
        <PlayerPreview
            avatar={ info.avatar_url }
            username={ info.login }>
            <ul className="space-list-items">
                {info.name && <li> { info.name }</li>}
                {info.location && <li> { info.location }</li>}
                {info.company && <li> { info.company }</li>}
                <li>Followers: { info.followers } </li>
                <li>Following: { info.following } </li>
                <li>Public Repos: { info.public_repos } </li>
                {info.blog && <li><a href={ info.blog }>{ info.blog }</a></li>}
            </ul>
        </PlayerPreview>
    )
};

PlayerProfile.propTypes = propTypes;

PlayerProfile.defaultProps = defaultProps;

export default PlayerProfile;

