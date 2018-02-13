import React from 'react';
import PropTypes from 'prop-types';
import {default as isoFetch} from 'isomorphic-fetch';

import './ForumBlock.css';
import ForumTitle from './ForumTitle';
import FormMessages from './FormMessages';
import ForumHistory from './ForumHistory';



class ShopsForumBlock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataReady: false,
            messageArray: this.props.historyMessages,
            countMessage: 0,
            isPostRequest:false,
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

    componentDidMount() {
        this.loadData();
        console.log('Данные загружаются!');
    };

    formSubmit = (mes) => {

        isoFetch("http://localhost:3000/messages", {
            method: 'post',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({type:'shops', header: mes.header, message:mes.header})
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson.success;
            })
            .then((success) =>{ if(success) {this.setState({isPostRequest: true}); }})
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
            isPostRequest: false,
            dataReady:true,
            messageArray: loadedData.reverse(),
            countMessage: loadedData.length
        });
        console.log('this.state.messageArray в fetchSuccess', this.state.messageArray);
    };


    loadData = () => {
        isoFetch("http://localhost:3000/messages?type=shops", {
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
        console.log('Render ShopsForumBlock');

        if ( !this.state.dataReady )
            return (<div className="preloader">
                <div className="loader"/>
            </div>
            );

        let messagesCode=this.state.messageArray.map( v =>
            <ForumHistory key={v.code} header={v.header} message={v.message} nameLink='Open' cbClickOpenLink={this.openMessage} />
        );

        return (
            <div className='ForumBlock'>
                <ForumTitle title={this.props.title}/>
                <FormMessages  cbSendClicked={this.formSubmit}
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
export default ShopsForumBlock;




