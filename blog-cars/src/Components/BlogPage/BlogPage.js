import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BlogWelcomePage from "./BlogWelcomePage/BlogWelcomePage";
import BlogChatPage from "./BlogChatPage/BlogChatPage";

import { getBlogById } from '../../services/data';
import { getUser } from '../../services/userApi';

function BlogPage() {
    
    const [blog, setBlog] = useState({});
    const [user, setUser] = useState({});
    const [pendingForMembership, setPendingForMembershipList] = useState([]);
    const [membersList, setMembersList] = useState([]);
    const [chatList, setChatList] = useState([]);
    const [change, setChange] = useState(true);
    const [curPage, setCurPage] = useState('welcome');
    const { id } = useParams();
      

    useEffect(() => {
        async function fetch() {
            const blogData = await getBlogById(id);
            const curUser = await getUser();
            setBlog(blogData);
            setUser(curUser);
            setPendingForMembershipList(blogData.pendingForMembership);
            setMembersList(blogData.members);
            setChatList(blogData.conversations);
        }
        
        fetch();
                
    }, [change]);   

    function update(){
       
        setChange(!change);
    }

    function changePage(){
        
        let page = curPage;
        if(page === 'welcome'){
            setCurPage('chat');
        } else if(page === 'chat'){
            setCurPage('welcome');
        }
    }

    
    const found = membersList.some(m=> m[user.username] === user.objectId);
    const owner = blog.admin || {};
    const isAdmin = user.objectId === owner.objectId;
    const status = user.status;

    return (
        <section>
            { isAdmin ? 
                <>
                    {curPage === 'welcome' ? <BlogWelcomePage isAdmin={isAdmin} changePage={changePage} found={found} refresh={update} members={membersList} pendings={pendingForMembership} blog={blog} user={user} /> : <BlogChatPage isAdmin={isAdmin} chatList={chatList} refresh={update} changePage={changePage} blog={blog} user={user} />}
                </>
                
                :
                <>
                    {found ? 
                    <BlogChatPage isAdmin={isAdmin} chatList={chatList} refresh={update} changePage={changePage} blog={blog} user={user} /> 
                
                     : <BlogWelcomePage isAdmin={isAdmin} found={found} refresh={update} members={membersList} pendings={pendingForMembership} blog={blog} user={user} />}
                </>
            }
            
        </section>
    );
}

export default BlogPage;