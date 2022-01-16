
import ChatMessage from './ChatMessage/ChatMessage';

import style from './ChatList.module.css';

function ChatList({
    chatList
}){
    return(
        <section className={style.chat_list_container}>
           <ChatMessage />
           <ChatMessage />
           <ChatMessage />
           <ChatMessage />
           <ChatMessage />
           <ChatMessage />
           <ChatMessage />
        </section>
    );
}

export default ChatList;