import { useState, useEffect, useContext } from 'react';
import { getUserOwnBlogs } from '../../services/data';
import AuthContext from '../../contexts/AuthContext';

import style from './MyBlogs.module.css';
import Item from '../HomePage/Item/Item';
import NotFound from '../NotFound/NotFound';

function MyBlogs() {

    const [myBlogs, setMyBlogs] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [notFound, setNotFound] = useState(false)
    const { userId } = useContext(AuthContext);
    const { query } = useContext(AuthContext);
    

    useEffect(() => {
        setIsFetching(true);

        async function fetch() {
            const respons = await getUserOwnBlogs(userId);
            const myOwnBlogs = respons.results;
            
            setIsFetching(false);

            const filteredData = myOwnBlogs?.filter((blog)=> blog.blogName.toLowerCase().includes(query.toLowerCase()));

            if(filteredData.length === 0){
                setNotFound(true);
            } else {
                setNotFound(false);
            }

            setMyBlogs(filteredData);
            
        }
        fetch();
    }, [query, userId]);

   if(notFound) return <NotFound />;

    return (
        <section className={style.container}>
            {isFetching ? <h1>Loading...</h1>
             : <> { myBlogs.length > 0 ? myBlogs.map(b => (<Item {...b} key={b.objectId} />)) : <h1>You don't have blogs!</h1>} </>
             }
        </section>
    );
}

export default MyBlogs;