import React from 'react';
import ShopsForumBlock from '../components/ShopsForumBlock';

import appData from '../appData';

class Page_Shops extends React.PureComponent {

    render() {
        return (
        <ShopsForumBlock
        title={appData.data.shops.titleText}
        historyMessages={appData.data.shops.messagesArray}
    />
        );

    }

}

export default Page_Shops;