import React, {useRef} from 'react';
import {connect} from 'react-redux';
import { addMsg } from '../../Actions';
import styles from './chat.module.css'


const Chat = (props) => {
    const {messages, addMsgAction} = props;

    const inputRef = useRef();
    const addMessage = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        addMsgAction(inputRef.current.value);
          
  }


    const mapMessages = ({id_msg, id_user, nick, text, avatar, self}) => {
            return(
                <div className={self ? styles.self : styles.noSelf} key = {id_msg}>
                    <img className = {self ? styles.avatarSelf : styles.avatarNoSelf} src={avatar} alt={id_user}></img>
                    <div className = {self ? styles.messageContentSelf : styles.messageContentNoSelf}>
                        <p className={self ? styles.nicknameSelf : styles.nicknameNoSelf}>{nick}</p>
                        <p className={styles.messageText}>{text}</p>
                    </div>
                </div>
            )
        }
        

        return(
        <>
            <div className = {styles.main_chat}>
                <div>{messages.map(mapMessages)}</div>
                <form className = {styles.inputMessage} onSubmit={addMessage}>
                    <input ref = {inputRef} type="text" placeholder='Сообщение...' ></input>
                    <input type="submit" value="Send"></input>
                </form>
            </div> 
        </>
        );
    }





const mapStateToProps = (state) => state.chatReducer;

const mapDispatchToProps = (dispatch) => {
    return{
        addMsgAction: data => {
            dispatch(addMsg(data));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
