import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getUserOwnBlogs } from '../../services/data';
import { getUserById } from '../../services/userApi';
import Item from '../HomePage/Item/Item';
import UserItem from './UserItem/UserItem';
import AuthContext from '../../contexts/AuthContext';

import style from './UserPage.module.css';

function UserPage() {
    const [user, setUser] = useState({});
    const [userBlogs, setUserBlogs] = useState([]);
    const { id } = useParams();
    const { query } = useContext(AuthContext);

    useEffect(() => {
        async function fetch() {
            const userData = await getUserById(id);
            const respons = await getUserOwnBlogs(id);

            setUser(userData);
            setUserBlogs(respons.results);

            if(query !== ""){
                const filteredData = respons?.results?.filter((blog)=> blog.blogName.toLowerCase().includes(query.toLowerCase()));

                setUserBlogs(filteredData);

            } else {

                setUserBlogs(respons.results);
            }
        }
        fetch();
    }, [query]);

    if (!user.username) return <h1>Loading...</h1>;

    return (
        <section className={style.user_page_container}>

            <section className={style.user_info}>
                <UserItem user={user} />
            </section>

            <section className={style.user_blogs}>
                {userBlogs.map(d => (<Item key={d.objectId} {...d} />))}
            </section>

        </section>
    );


}

export default UserPage;