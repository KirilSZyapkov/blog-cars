import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getAllBlogs } from '../../services/data';
import NotFound from '../NotFound/NotFound';
import Loader from '../Loader/Loader';

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

            if (filteredData.length === 0) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }

            setData(filteredData);
        }

        fetch();
    }, [query]);

    if (notFound) {
        return <NotFound />
    }

    return (
        <>
            <section className={style.container}>
                {data.length !== 0 ? data.map(d => <Item key={d.objectId} {...d} />) : <Loader />}

            </section>
            <footer className={style.mobile_footer}>

                <div className={style.mobile_footer_content}>
                    <h2 className={style.mobile_footer_content_h2}>Follow us on</h2>
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank">Facebook</a>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank" >Instagram</a>
                    <a href="https://www.twitter.com" rel="noreferrer" target="_blank" >Twitter</a>

                    <p className={style.mobile_footer_content_p}>All rights reserved created by Kiril</p>

                </div>
            </footer>
        </>
    );
}

export default HomePage;