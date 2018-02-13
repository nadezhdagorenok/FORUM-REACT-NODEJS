import React from 'react';
import PagesLinks from './PagesLinks'
import './Page_Home.css';
import appData from '../appData';

class Page_Home extends React.Component {

    render() {
        return (
            <div className="homeBlock">
                <div className="forum"><span>FORUM</span></div>

                <div><img src = {appData.image}/></div>
            </div>
        );

    }
}

export default Page_Home;


/*<PagesLinks/>*/