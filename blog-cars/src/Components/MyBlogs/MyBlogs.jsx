import { useState, useEffect, useContext } from 'react';
import { getUserOwnBlogs } from '../../services/data';
import AuthContext from '../../contexts/AuthContext';

import style from './MyBlogs.module.css';
import Item from '../HomePage/Item/Item';

function MyBlogs() {

    const [myBlogs, setMyBlogs] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const { userId } = useContext(AuthContext);
    

    useEffect(() => {
        async function fetch() {
            const respons = await getUserOwnBlogs(userId);
            const myOwnBlogs = respons.results;
            setMyBlogs(myOwnBlogs);
            setIsFetching(!isFetching);
        }
        fetch();
    }, []);

   

    return (
        <section className={style.container}>
            {isFetching ? <h1>Loading...</h1>
             : <> { myBlogs.length > 0 ? myBlogs.map(b => (<Item {...b} key={b.objectId} />)) : <h1>You don't have blogs!</h1>} </>
             }
        </section>
    );
}

export default MyBlogs;