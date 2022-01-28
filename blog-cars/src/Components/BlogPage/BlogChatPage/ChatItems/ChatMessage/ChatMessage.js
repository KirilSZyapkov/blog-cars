import style from '../ChatList.module.css';

function ChatMessage({
    message
}) {

    const keyData = Object.keys(message);
    const valueData = Object.values(message);
    
    return (
        <div className={style.chat_list_message}>
            <h3 className={style.chat_h3}>{keyData[0]}</h3>
            <p className={style.chat_time}>{valueData[1]}</p>
            <p className={style.chat_p}> {valueData[0]} </p>
        </div>
    );

}

export default ChatMessage;