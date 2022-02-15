import { useEffect, useState, useContext } from 'react';
import GroupItem from "./GroupItems/GroupItem";
import AuthContext from '../../contexts/AuthContext';
import style from './Groups.module.css';
import { getUser } from '../../services/userApi';
import NotFound from '../NotFound/NotFound';

function Groups() {

    const [groups, setGroups] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const { query } = useContext(AuthContext);

    useEffect(() => {
        async function fetch() {
            const respons = await getUser();
            const list = respons.blogList;

            const filteredData = list?.filter((blog) => blog.blog[0].toLowerCase().includes(query.toLowerCase()));

            if (filteredData.length === 0) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }

            setGroups(filteredData);

        };
        fetch();

    }, [refresh, query]);

    function refreshPage() {
        setRefresh(!refresh);
    };

    if (notFound) return <NotFound />;

    return (
        <div>

            <section className={style.container}>
                {groups.length !== 0 ? groups.map(g => <GroupItem refreshPage={refreshPage} key={g.blog[1]} {...g} />) : <h1>Loading...</h1>}
            </section>
        </div>
    );
}

export default Groups;