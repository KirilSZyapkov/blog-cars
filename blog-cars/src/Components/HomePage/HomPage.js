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

    console.log(data);

    return (
        <section className={style.container}>
            <Item />
            <Item />
            <Item />
        </section>
    );
}

export default HomePage;