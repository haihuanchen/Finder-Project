import React, {Component} from 'react';
import Chat from './Chat'

class ChatsContainer extends Component{
    render(){
        return(
            <div className="chats">
                <h1>This is private chat page</h1>
                <Chat />
            </div>
    
        )
    }
}

export default ChatsContainer;
