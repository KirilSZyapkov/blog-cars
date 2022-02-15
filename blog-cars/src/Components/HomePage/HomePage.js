import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getAllBlogs } from '../../services/data';

import Item from './Item/Item';
import style from './HomePage.module.css';

function HomePage() {

    const [data, setData] = useState([]);
    const {query} = useContext(AuthContext);

    useEffect(() => {
        async function fetch() {
            const respons = await getAllBlogs();
            const result = respons.results;

            if(query !== ""){
                const filteredData = result?.filter((blog)=> blog.blogName.toLowerCase().includes(query.toLowerCase()));
                setData(filteredData);

            } else {

                setData(result);
            }
        }

        fetch();
    }, [query])

    return (
        <section className={style.container}>
            {data.length !== 0 ? data.map(d => <Item key={d.objectId} {...d} />) : <h1>Loading...</h1>}
        </section>
    );
}

export default HomePage;