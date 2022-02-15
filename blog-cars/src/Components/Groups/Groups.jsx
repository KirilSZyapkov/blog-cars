import { useEffect, useState, useContext } from 'react';
import GroupItem from "./GroupItems/GroupItem";
import AuthContext from '../../contexts/AuthContext';
import style from './Groups.module.css';
import { getUser } from '../../services/userApi';

function Groups() {

    const [groups, setGroups] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const { query } = useContext(AuthContext);

    useEffect(() => {
        async function fetch() {
            const respons = await getUser();
            const list = respons.blogList;

            if (query !== "") {
                const filteredData = list?.filter((blog) => blog.blog[0].toLowerCase().includes(query.toLowerCase()));
                setGroups(filteredData);

            } else {

                setGroups(list);
            }

        };
        fetch();

    }, [refresh, query]);

    function refreshPage() {
        setRefresh(!refresh);
    };

    return (
        <div>

            <section className={style.container}>
                {groups.length !== 0 ? groups.map(g => <GroupItem refreshPage={refreshPage} key={g.blog[1]} {...g} />) : <h1>Loading...</h1>}
            </section>
        </div>
    );
}

export default Groups;