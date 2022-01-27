
import ChatMessage from './ChatMessage/ChatMessage';

import style from './ChatList.module.css';

function ChatList({
    chatList
}){
    return(
        <section className={style.chat_list_container}>
           {chatList.length > 0 ? chatList.map((m, i)=> < ChatMessage message={m} key={i}/>) : <h1>Write the first post...</h1>}
        </section>
    );
}

export default ChatList;