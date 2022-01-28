import { useState, useEffect } from 'react';

import { getAllBlogs } from '../../services/data';

import Item from './Item/Item';
import style from './HomePage.module.css';

function HomePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetch() {
            const respons = await getAllBlogs();
            const result = respons.results;
            setData(result);
        }

        fetch();
    }, [])

    return (
        <section className={style.container}>
            {data.length !== 0 ? data.map(d => <Item key={d.objectId} {...d} />) : <h1>Loading...</h1>}
        </section>
    );
}

export default HomePage;