import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import BlogWelcomePage from "./BlogWelcomePage/BlogWelcomePage";
import BlogChatPage from "./BlogChatPage/BlogChatPage";

import style from './BlogPage.module.css';

import { getBlogById } from '../../services/data';
// import { getUser } from '../../services/userApi';
import AuthContext from '../../contexts/AuthContext';

function BlogPage() {
    const { id } = useParams();
    
    const [blog, setBlog] = useState({});
    const [user] = useState(useContext(AuthContext));
    

    useEffect(() => {
        async function fetch() {
            const blogData = await getBlogById(id);
            // const curUser = await getUser();
            setBlog(blogData);
            // setUser(curUser);
        }

        fetch();
    }, []);


    return (
        <section>
            <BlogWelcomePage blog={blog} user={user} />
        </section>
    );
}

export default BlogPage;