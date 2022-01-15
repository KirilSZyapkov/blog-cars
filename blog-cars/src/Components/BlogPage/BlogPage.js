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
    const [change, setChange] = useState(true);
    const { id } = useParams();
      

    useEffect(() => {
        async function fetch() {
            const blogData = await getBlogById(id);
            const curUser = await getUser();
            setBlog(blogData);
            setUser(curUser);
            setPendingForMembershipList(blogData.pendingForMembership);
            setMembersList(blogData.members);
        }
        
        fetch();
                
    }, [change]);   

    function update(){
        console.log("before "+change);
        
        setChange(!change);
    }
    console.log("after "+change);
    
    return (
        <section>
            <BlogWelcomePage refresh={update} members={membersList} pendings={pendingForMembership} blog={blog} user={user} />
            {/* {!found ? <BlogChatPage blog={blog} user={user} /> : <BlogWelcomePage blog={blog} user={user} />}      */}
        </section>
    );
}

export default BlogPage;