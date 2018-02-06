import React from 'react';
import PropTypes from 'prop-types';

import './ForumHistory.css';


class ForumHistory extends React.PureComponent {

    static propTypes = {
        header: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        nameLink: PropTypes.string.isRequired,
        cbClickOpenLink: PropTypes.func.isRequired,
    };

    clickOpenLink = () => {
        console.log('Клик по Open');
        this.props.cbClickOpenLink(this.props.header, this.props.message);
    };

    render() {
        console.log('Render ForumHistory');
        return <li className= 'HeaderMessageBlock'>
            <div className = 'HeaderBlock'>{this.props.header}</div>
            <div className = 'MessageBlock'>{this.props.message}</div>
            <span className = 'OpenLink' onClick = {this.clickOpenLink}>{this.props.nameLink}</span>
        </li>;
    }
}

export default ForumHistory;
