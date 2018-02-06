import React from 'react';
import MoneyForumBlock from '../components/MoneyForumBlock';

import appData from '../appData';

class Page_Money extends React.PureComponent {

    render() {
        return (
        <MoneyForumBlock
        title={appData.money.titleText}
        historyMessages={appData.money.messagesArray}
    />
        );

    }

}

export default Page_Money;