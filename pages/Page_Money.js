import React from 'react';
import MoneyForumBlock from '../components/MoneyForumBlock';
import ForumImage from '../components/ForumImage';

import appData from '../appData';

class Page_Money extends React.PureComponent {

    render() {
        return (
        <MoneyForumBlock
        title={appData.data.money.titleText}
        historyMessages={appData.data.money.messagesArray}
    />

        );

    }

}

export default Page_Money;