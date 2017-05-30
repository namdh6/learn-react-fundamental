import React, { Component } from 'react';
import PropTypes from 'prop-types';

let styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

const propTypes = {
    text: PropTypes.string
};

const defaultProps = {
    text: 'Loading'
};

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }

    componentDidMount() {
        let stopper = this.props.text + '...';
        this.interval = window.setInterval(() => {
            if (this.state.text === stopper) {
                this.setState(() => ({ text: this.props.text }));
            } else {
                this.setState(prevState => ({ text: prevState.text + '.'}));
            }
        }, 300);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <p style={ styles.content }>
                { this.state.text }
            </p>
        );
    }
}

Loading.propTypes = propTypes;

Loading.defaultProps = defaultProps;

export default Loading;
