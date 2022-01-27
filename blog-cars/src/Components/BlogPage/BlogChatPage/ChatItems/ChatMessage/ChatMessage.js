
import { Link } from 'react-router-dom';

import style from '../ChatList.module.css';


function ChatMessage({
    message
}) {
    
    const userName = Object.keys(message);
    const text = Object.values(message);

    return (
        <div className={style.chat_list_message}>
            <h3>{userName}</h3>
            <p> {text[0]} </p>
        </div>
    );

}

export default ChatMessage;