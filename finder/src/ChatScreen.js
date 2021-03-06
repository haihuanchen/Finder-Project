import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

function ChatScreen () {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Alexandra',
            image: 'https://pmcdeadline2.files.wordpress.com/2019/07/alexandra-daddario.jpg',
            message: "What's up!"
        },
        {
            message: "Hi Alexandra! How is everything going?"
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return(
        <div className='chatScreen'>
            <p className="chatScreen-timestamp">You matched with Alexandra on March 23, 2020</p>
            {messages.map((message)=>(
                message.name ? (
                    <div className="chatScreen-message">
                    <Avatar 
                        className="chatScreen-image"
                        alt={message.name}
                        src={message.image}
                    />
                      <p className="chatScreen-text">{message.message}</p>
                    </div>
                ) :(
                    <div className="chatScreen-message">
                        <p className="chatScreen-textUser">{message.message}</p>
                    </div>
                )  
            ))}
            <div className="chatScreen-form">
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        type="text" 
                        className="chatScreen-inputField" 
                        placeholder="Type a message" 
                    />
                    <button type='submit' onClick={handleSend} className="chatScreen-button">Send</button>
                </form>
            </div>
        </div>
        
    )
}

export default ChatScreen;