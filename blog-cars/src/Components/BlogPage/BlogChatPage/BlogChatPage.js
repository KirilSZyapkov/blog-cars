import { useState } from 'react';

import ChatList from "./ChatItems/ChatList";

import style from './BlogChatPage.module.css';
import { creatNewBlogPost } from '../../../services/data';

function BlogChatPage({
    chatList,
    refresh,
    changePage,
    blog,
    user,
    isAdmin
}) {

    const [errorM, setErrorM] = useState(null);

    async function addChat(e) {
        e.preventDefault();

        const target = e.target;
        const message = target.message.value;

        try {

            await creatNewBlogPost(blog.objectId, user.username, message);
            target.message.value = '';
            refresh();
            
        } catch (err) {
            setErrorM(err.message);
            alert(errorM);
        }

    }

    return (
        <section className={style.chat_container}>
            <ChatList chatList={chatList} />
            <form onSubmit={addChat} className={style.chat_form}>
                <input type="text" placeholder="Enter message" name="message" id="message" />

                <button type="submit" className={style.chat_sendbtn}>Send</button>
                {isAdmin ? <button onClick={changePage} className={style.chat_pagebtn}>Blog Details</button> : ''}
            </form>
        </section>
    );
}

export default BlogChatPage;