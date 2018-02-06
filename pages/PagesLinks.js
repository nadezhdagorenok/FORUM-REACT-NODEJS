import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {

    render() {

        return (
            <div>
                <NavLink to="/home" className="PageLink" activeClassName="ActivePageLink">Home</NavLink>
                <NavLink to="/cars" className="PageLink" activeClassName="ActivePageLink">Cars</NavLink>
                <NavLink to="/flowers" className="PageLink" activeClassName="ActivePageLink">Flowers</NavLink>
                <NavLink to="/health" className="PageLink" activeClassName="ActivePageLink">Health</NavLink>
                <NavLink to="/shops" className="PageLink" activeClassName="ActivePageLink">Shops</NavLink>
                <NavLink to="/money" className="PageLink" activeClassName="ActivePageLink">Money</NavLink>
            </div>
        );

    }

}

export default PagesLinks;