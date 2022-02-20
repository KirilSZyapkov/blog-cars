import React from 'react'

import style from './Loader.module.css';

function Loader() {
    return (
        <div className={style.loader_container}>
            <h1>Loading ...</h1>
            <div className={style.loader}></div>
        </div>
    )
}

export default Loader;