import React from 'react';
import HealthForumBlock from '../components/HealthForumBlock';

import appData from '../appData';

class Page_Health extends React.PureComponent {

    render() {
        return (
        <HealthForumBlock
        title={appData.health.titleText}
        historyMessages={appData.health.messagesArray}
    />
        );

    }

}

export default Page_Health;