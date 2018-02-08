import React from 'react';
import PagesLinks from './PagesLinks'
import './Page_Home.css';

class Page_Home extends React.Component {

    render() {
        return (
            <div className="homeBlock">
                <div><span>FORUM</span></div>
                <PagesLinks/>

            </div>
        );

    }

}

export default Page_Home;