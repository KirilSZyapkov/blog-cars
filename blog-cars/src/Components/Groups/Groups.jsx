import { useEffect, useState } from 'react';
import GroupItem from "./GroupItems/GroupItem";

import style from './Groups.module.css';
import { getUser } from '../../services/userApi';

function Groups() {

    const [groups, setGroups] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        async function fetch() {
            const respons = await getUser();
            const list = respons.blogList;
            setGroups(list);
        };
        fetch();

    }, [refresh]);

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