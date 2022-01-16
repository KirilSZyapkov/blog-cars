import ChatList from "./ChatItems/ChatList";

import style from './BlogChatPage.module.css';

function BlogChatPage({
    chatList,
    refresh,
    changePage,
    blog,
    user,
    isAdmin
}) {
    return (
        <section className={style.chat_container}>
            <ChatList chatList={chatList} />
            <form className={style.chat_form}>
                <label htmlFor="blogName"><b>Blog Name</b></label>
                <input type="text" placeholder="Enter message" name="message" id="message" />

                <button type="submit" className={style.chat_sendbtn}>Send</button>
                {isAdmin ? <button className={style.chat_pagebtn}>Blog Details</button> : ''}
            </form>
        </section>
    );
}

export default BlogChatPage;