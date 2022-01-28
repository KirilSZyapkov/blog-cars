import { useEffect, useState } from 'react';
import GroupItem from "./GroupItems/GroupItem";

import style from './Groups.module.css';
import { getUser } from '../../services/userApi';

function Groups() {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function fetch() {
            const respons = await getUser();
            setGroups(respons);
        };
        fetch();

    }, []);

    console.log(groups);

    return (
        <section className={style.container}>
            {/* {data.length !== 0 ? data.map(d => <GroupItem key={d.objectId} {...d} />) : <h1>Loading...</h1>} */}
        </section>
    );
}

export default Groups;