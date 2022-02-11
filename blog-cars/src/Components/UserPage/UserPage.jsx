import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserOwnBlogs } from '../../services/data';
import { getUserById } from '../../services/userApi';
import Item from '../HomePage/Item/Item';

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

    console.log(user);
    console.log(userBlogs);

    return (
        <section className={style.user_page_container}>

            <section className={style.user_info}>
                info
            </section>

            <section className={style.user_blogs}>
                {userBlogs?.length !== 0 ? userBlogs.map(d => (<Item key={d.objectId} {...d}/>)) : <h1>Loading...</h1>}
            </section>

        </section>
    );


}

export default UserPage;