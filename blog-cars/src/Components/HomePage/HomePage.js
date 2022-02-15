import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getAllBlogs } from '../../services/data';
import NotFound from '../NotFound/NotFound';

import Item from './Item/Item';
import style from './HomePage.module.css';

function HomePage() {

    const [data, setData] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const { query } = useContext(AuthContext);

    useEffect(() => {
        async function fetch() {
            const respons = await getAllBlogs();
            const result = respons.results;

            const filteredData = result?.filter((blog) => blog.blogName.toLowerCase().includes(query.toLowerCase()));

            if(filteredData.length === 0){
                setNotFound(true);
            } else {
                setNotFound(false);
            }

            setData(filteredData);
        }

        fetch();
    }, [query]);

    if(notFound){
        return <NotFound />
    }

    return (
        <section className={style.container}>
            {data.length !== 0 ? data.map(d => <Item key={d.objectId} {...d} />) : <h1>Loading...</h1>}
        </section>
    );
}

export default HomePage;