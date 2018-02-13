import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Page_Home from './Page_Home';
import Page_Cars from './Page_Cars';
import Page_Flowers from './Page_Flowers';
import Page_Health from './Page_Health';
import Page_Money from './Page_Money';
import Page_Shops from './Page_Shops';

class PagesRouter extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Page_Home} />
                <Route path="/cars" component={Page_Cars}/>
                <Route path="/flowers" component={Page_Flowers} />
                <Route path="/health" component={Page_Health} />
                <Route path="/money" component={Page_Money} />
                <Route path="/shops" component={Page_Shops} />
             </Switch>

        );

    }

}

export default PagesRouter;











// /*<BrowserRouter>*/
//                 {/*<Route path="/" component={App}>*/}
//                     {/*<Route path="/cars" component={Page_Cars} />/*/}
//                     {/*<Route path="/flowers" component={Page_Flowers} />*/}
//                     {/*<Route path="/health" component={Page_Health} />*/}
//                     {/*<Route path="/money" component={Page_Money} />*/}
//                     {/*<Route path="/shops" component={Page_Shops} />*/}
//                 {/*</Route>*/}
//             {/*</BrowserRouter>,document.getElementById('container')*/}
//         /*);*/


