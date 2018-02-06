import React from 'react';
import CarsForumBlock from '../components/CarsForumBlock';

import appData from '../appData';

class Page_Cars extends React.PureComponent {

    render() {
        return (
        <CarsForumBlock
        title={appData.cars.titleText}
        historyMessages={appData.cars.messagesArray}
    />
        );

    }

}

export default Page_Cars;