import React from 'react';
import PropTypes from 'prop-types';
import './ForumMessages.css';


class ForumMessages extends React.PureComponent {
// newHeader: PropTypes.string.isRequired,
    // newMessage: PropTypes.string.isRequired,
    // cbHeaderTextChanged: PropTypes.func.isRequired,
    // cbMessageTextChange: PropTypes.func.isRequired,
    static propTypes = {
        cbSendClicked: PropTypes.func.isRequired,
        valueButton: PropTypes.string.isRequired,
        typeButton: PropTypes.string.isRequired,
    };
    state = {
        header:'',
        message:'',
    };


    headerTextChange = (EO) => {
        console.log('HeaderMessage: текст свободного ввода заголовка изменён - '+EO.target.value);
        this.setState({header: EO.target.value});
       // this.props.cbHeaderTextChanged(EO.target.value);
    };

    messageTextChange = (EO) => {
        console.log('TextMessage: текст свободного ввода текста изменён - '+EO.target.value);
        this.setState({message: EO.target.value});
        //this.props.cbMessageTextChange(EO.target.value);
    };

    sendButton = (EO) => {
        console.log('Кнопка send нажата - ');
        EO.preventDefault();
        let mes = {header : this.state.header, message : this.state.message};
        console.log(mes);
        this.props.cbSendClicked(mes);
        this.setState({header: '', message: ''});
    };

    render() {
        console.log('Render ForumMessages');
        return (
            <div className='ForumMessages'>
                <form className='FormForum'>
                    <div className='InputBlock'>
                        <label htmlFor='header' className='HeaderMessage'>Header</label>
                        <input type='text' name="header" onChange={this.headerTextChange} id='header' className={this.state.header? 'Header-control-active' : 'Header-control'}  value={this.state.header} placeholder="Type header" required autoFocus />
                    </div>
                    <div className='InputBlock'>
                        <label htmlFor='message' className='TextMessage'>Message</label>
                        <textarea id='message' name="message" className={this.state.message? 'Message-control-active' : 'Message-control'}  value={this.state.message} onChange={this.messageTextChange} placeholder='Type your message' maxLength='140' rows='7'/>
                    </div>
                    <Button  onClick={this.sendButton} value = {this.props.valueButton} disabled={!this.state.message || !this.state.header} type = {this.props.typeButton}/>
                </form>
            </div>
        )
    }

}



function Button (props) {
        return (
            <button className = 'SendButton' onClick={props.onClick} type={props.type} disabled={props.disabled}>
                {props.value}
            </button>
        );

}

export default ForumMessages;


