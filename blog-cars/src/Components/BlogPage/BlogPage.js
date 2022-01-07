import { useState, useEffect, Children } from 'react';
import { useParams } from 'react-router-dom';

import BlogWelcomePage from "./BlogWelcomePage/BlogWelcomePage";
import BlogChatPage from "./BlogChatPage/BlogChatPage";

import style from './BlogPage.module.css';

import { getBlogById } from '../../services/data';
import { getUser } from '../../services/userApi';

function BlogPage() {
    const { id } = useParams();

    const [blog, setBlog] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetch() {
            const result = await getBlogById(id);
            const curUser = await getUser();
            setBlog(result);
            setUser(curUser);
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