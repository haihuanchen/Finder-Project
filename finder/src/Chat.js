import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'

const Chat = (props) => {
    return(
        <div className="chat">
            <Avatar className="chat-img" alt={props.name} src={props.profileImg}/>
            <div className="chat-details">
                <h2>{props.name}</h2>
                <p>{props.message}</p>
            </div>
            <p className="chat-timestamp">{props.timestamp}</p>
        </div>
    )
}

export default Chat;