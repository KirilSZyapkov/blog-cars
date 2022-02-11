import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserOwnBlogs } from '../../services/data';
import { getUserById } from '../../services/userApi';
import Item from '../HomePage/Item/Item';
import UserItem from './UserItem/UserItem';

import style from './UserPage.module.css';

function UserPage() {
    const [user, setUser] = useState({});
    const [userBlogs, setUserBlogs] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetch() {
            const userData = await getUserById(id);
            const respons = await getUserOwnBlogs(id);

            setUser(userData);
            setUserBlogs(respons.results);
        }
        fetch();
    }, []);

   if(!user.username) return <h1>Loading...</h1>;

    return (
        <section className={style.user_page_container}>

            <section className={style.user_info}>
            <UserItem user={user} />
            </section>

            <section className={style.user_blogs}>
                {userBlogs.map(d => (<Item key={d.objectId} {...d}/>))}
            </section>

        </section>
    );


}

export default UserPage;