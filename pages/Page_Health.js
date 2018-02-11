import React from 'react';
import HealthForumBlock from '../components/HealthForumBlock';

import appData from '../appData';

class Page_Health extends React.PureComponent {

    render() {
        return (
        <HealthForumBlock
        title={appData.data.health.titleText}
        historyMessages={appData.data.health.messagesArray}
    />
        );

    }

}

export default Page_Health;