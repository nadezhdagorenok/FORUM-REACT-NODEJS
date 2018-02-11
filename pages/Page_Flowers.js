import React from 'react';
import FlowersForumBlock from '../components/FlowersForumBlock';

import appData from '../appData';

class Page_Flowers extends React.PureComponent {

    render() {
        return (
        <FlowersForumBlock
        title={appData.data.flowers.titleText}
        historyMessages={appData.data.flowers.messagesArray}
    />
        );

    }

}

export default Page_Flowers;