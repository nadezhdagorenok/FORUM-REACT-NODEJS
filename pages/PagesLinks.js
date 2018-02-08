import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {

    render() {

        return (
            <div className="listBlock">

                    <NavLink to="/"/>
                    <NavLink to="/cars" className="PageLink own" activeClassName="ActivePageLink">Cars</NavLink>
                    <NavLink to="/flowers" className="PageLink two" activeClassName="ActivePageLink">Flowers</NavLink>
                    <NavLink to="/health" className="PageLink three" activeClassName="ActivePageLink">Health</NavLink>
                    <NavLink to="/shops" className="PageLink four" activeClassName="ActivePageLink">Shops</NavLink>
                    <NavLink to="/money" className="PageLink five" activeClassName="ActivePageLink">Money</NavLink>

            </div>
        );

    }

}

export default PagesLinks;