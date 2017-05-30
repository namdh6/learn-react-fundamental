import React, { Component, PropTypes } from 'react';
import './Popular.css';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import { fetchPopularRepos } from '../../utils/api';
import RepoGrid from '../RepoGrid/RepoGrid';
import Loading from '../Loading/Loading';

const propTypes = {};

const defaultProps = {};

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);

    }

    updateLanguage(lang) {
        this.setState(() => ({ selectedLanguage: lang, repos: null }));
        fetchPopularRepos(lang).then(repos => this.setState(() => ({ repos: repos })));
    }

    render() {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos 
                    ? <Loading />
                    : <RepoGrid repos={this.state.repos} />}
            </div>
        );
    }
}

Popular.propTypes = propTypes;

Popular.defaultProps = defaultProps;

export default Popular;
