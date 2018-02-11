import React from 'react';
import PropTypes from 'prop-types';
import {default as isoFetch} from 'isomorphic-fetch';

import './ForumBlock.css';
import ForumTitle from './ForumTitle';
import ForumMessages from './ForumMessages';
import ForumHistory from './ForumHistory';



class ForumBlock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.loadData();
        this.state = {
            dataReady: false,
            selectedAnswerCode: null,
            newHeader:'',
            newMessage:'',
            messageArray: this.props.historyMessages,
            countMessage: 0,
            isPost:false,
            // isChangeText:false,
            // isChangeHeader: false,
            isClickOnOpen: false,
            openHeaderModalWindow: '',
            openMessageModalWindow: '',
        };
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        historyMessages: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                header: PropTypes.string.isRequired,
                message: PropTypes.string.isRequired,
            })
        ),
    };

    // headerTextChange = (value) => {
    //     console.log('изменено поле заголовка ' + value);
    //     this.setState( {newHeader:value, isChangeHeader:true});
    // };
    // messageTextChange = (mes) => {
    //     console.log('изменено поле сообщения ' + mes);
    //     this.setState( {newMessage:mes, isChangeText:true});
    // };
    Clicked = (mes)=> {
        // if (this.state.isChangeHeader && this.state.isChangeText) {

            // let mes ={};
            // mes.header = this.state.newHeader;
            // mes.message = this.state.newMessage;
console.log(mes);
            this.setState({newHeader: mes.header, newMessage: mes.message, isPost:false}, this.formSubmit);

        }


    formSubmit = () => {

       return isoFetch("http://localhost:3000/messages", {
            method: 'post',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(
                    {
                    header: this.state.newHeader,
                    message: this.state.newMessage,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    return responseJson.success;
                })
                .catch((error) => {
                    this.fetchError(error.message);
                });
    };

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };
    fetchSuccess = (loadedData) => {
        console.log(loadedData);

        this.setState({
            dataReady:true,
            messageArray: loadedData.reverse(),
            countMessage: loadedData.length,
        });
    };
    load = () => {
        this.setState({isPost:true});
    };

    loadData = () => {

        isoFetch("http://localhost:3000/ messages", {
            method: 'get',
            headers: {
                "Accept": "application/json",
            },
        })
            .then( (response) => {
                if (!response.ok) {
                    let Err=new Error("fetch error " + response.status);
                    Err.userMessage="Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then( (data) => {
                try {
                    this.fetchSuccess(data);
                }
                catch ( error ){
                    this.fetchError(error.message);
                }
            })
            .catch( (error) => {
                this.fetchError(error.message);
            })
        ;

    };

    openMessage = (openHeader, openMessage) => {
        console.log('Open message');
        this.setState({isClickOnOpen:true, openHeaderModalWindow: openHeader, openMessageModalWindow: openMessage});


    };

    render() {
        console.log('Render ForumBlock');

        if ( !this.state.dataReady )
            return <div>data load...</div>;

        let messagesCode=this.state.messageArray.map( v =>
            <ForumHistory key={v.code} header={v.header} message={v.message} nameLink='Open' cbClickOpenLink={this.openMessage} />
        );

        return (
            <div className='ForumBlock'>
                <ForumTitle title={this.props.title}/>
                <ForumMessages  cbSendClicked={this.Clicked}
                                cbResetForm={this.load}
                                valueButton='Send'
                                typeButton = 'submit'
                />
                <div className='CountMessage'>
                    <span>Number of messages: </span>
                    <span>{this.state.countMessage}</span>
                </div>
                <ul className='MessageBlock'>{messagesCode}</ul>

                {
                    ((this.state.isClickOnOpen) &&
                        <div className='MessageModalWindow'>
                            <ul>
                                <li>{this.state.openHeaderModalWindow}</li>
                                <li>{this.state.openMessageModalWindow}</li>
                            </ul>
                            <button onClick={()=>this.setState({isClickOnOpen:false})}>{'Close'}</button>
                        </div>
                    )
                }


            </div>
        );

    }

}

export default ForumBlock;




