import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Home from './Page_Home';
import Page_Cars from './Page_Cars';
import Page_Flowers from './Page_Flowers';
import Page_Health from './Page_Health';
import Page_Money from './Page_Money';
import Page_Shops from './Page_Shops';

class PagesRouter extends React.Component {

    render() {

        return (
            <div>
                <Route path="/home" component={Page_Home} />
                <Route path="/cars" component={Page_Cars} />
                <Route path="/flowers" component={Page_Flowers} />
                <Route path="/health" component={Page_Health} />
                <Route path="/money" component={Page_Money} />
                <Route path="/shops" component={Page_Shops} />
            </div>
        );

    }

}

export default PagesRouter;
