import React from 'react';
import PropTypes from 'prop-types';
import style from './SelectLanguage.css';

const propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

const SelectLanguage = props => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    const listLanguages = languages.map(lang => (
        <li
            className={lang === props.selectedLanguage ? 'selected' : 'unselected'}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
        >
            {lang}
        </li>
    ));

    return (
        <ul className='list-languages'>
            {listLanguages}
        </ul>
    );
};

SelectLanguage.propTypes = propTypes;

export default SelectLanguage;
