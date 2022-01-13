import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BlogWelcomePage from "./BlogWelcomePage/BlogWelcomePage";
import BlogChatPage from "./BlogChatPage/BlogChatPage";

import { getBlogById } from '../../services/data';
import { getUser } from '../../services/userApi';

function BlogPage() {
    const { id } = useParams();
    
    const [blog, setBlog] = useState({});
    const [user, setUser] = useState({});
    

    useEffect(() => {
        async function fetch() {
            const blogData = await getBlogById(id);
            const curUser = await getUser();
            setBlog(blogData);
            setUser(curUser);
        }

        fetch();
    }, []);


    const membershipList = blog.pendingForMembership || [];
    const found = membershipList.some(m=> m[user.username] === user.objectId);
    
    return (
        <section>
            {!found ? <BlogChatPage blog={blog} user={user} /> : <BlogWelcomePage blog={blog} user={user} />}     
        </section>
    );
}

export default BlogPage;