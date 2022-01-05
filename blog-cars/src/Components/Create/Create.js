import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Create.module.css';

import { createBlog } from '../../services/data';
import Notification from '../common/Notification/Notification';
import validate from '../common/validations/validate';

function Create() {
    const navigation = useNavigate();

    const [errorM, setErrorM] = useState(null);

    async function createNewBlog(e) {
        e.preventDefault();
        const target = e.target;
        const blogName = target.blogName.value.trim();
        const imgUrl = target.imgUrl.value.trim();
        const description = target.description.value.trim();

        const data = {
            blogName,
            imgUrl,
            description
        };

        try {
            validate('create', data);
            await createBlog(data);
            navigation('/');

        } catch (err) {
            console.log(err);
            setErrorM(err.message);

        };

    }

    setTimeout(() => {
        setErrorM(null);
    }, 8000);

    return (
        <form onSubmit={createNewBlog} className={style.form}>
            <div className={style.container}>
                <h1>Create New Blog</h1>
                {errorM && <Notification message={errorM} />}

                <label htmlFor="blogName"><b>Blog Name</b></label>
                <input type="text" placeholder="Enter Blog Name" name="blogName" id="blogName" />

                <label htmlFor="imgUrl"><b>Image</b></label>
                <input type="text" placeholder="Enter img url" name="imgUrl" id="imgUrl" />

                <label htmlFor="description"><b>Description</b></label>
                <input type="text" placeholder="Enter Description" name="description" id="description" />

                <button type="submit" className={style.createbtn}>Create</button>
            </div>
        </form>
    );
}

export default Create;