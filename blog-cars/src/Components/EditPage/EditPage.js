import {useState, useEffect} from 'react';
import {useNavigate, Link, useParams} from 'react-router-dom';

import style from './EditPage.module.css';

import { updateBlog, getBlogById } from '../../services/data';
import Notification from '../common/Notification/Notification';
import validate from '../common/validations/validate';

function EditPage(){

    const navigation = useNavigate();
    const {id} = useParams();

    const [blog, setBlog] = useState({});
    const [errorM, setErrorM] = useState(null);


    useEffect(()=>{
        async function fetch(){
            const respons = await getBlogById(id);
            setBlog(respons);
        }

        fetch();
    },[]);


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
            await updateBlog(id, data);
            navigation(`/blog/${id}`);

        } catch (err) {
            
            setErrorM(err.message);

        };

    }

    setTimeout(() => {
        setErrorM(null);
    }, 8000);

    return(
        
        <form onSubmit={createNewBlog} className={style.form}>
            {blog.blogName ?
            <div className={style.container}>
                <h1>Edit Blog</h1>
                {errorM && <Notification message={errorM} />}

                <label htmlFor="blogName"><b>Blog Name</b></label>
                <input type="text" placeholder="Enter Blog Name" name="blogName" id="blogName" defaultValue={blog.blogName}/>

                <label htmlFor="imgUrl"><b>Image</b></label>
                <input type="text" placeholder="Enter img url" name="imgUrl" id="imgUrl" defaultValue={blog.imgUrl}/>

                <label htmlFor="description"><b>Description</b></label>
                <input type="text" placeholder="Enter Description" name="description" id="description" defaultValue={blog.description}/>

                <button type="submit" className={style.createbtn}>Save</button>
                <Link to={`/blog/${id}`} ><button type="submit" className={style.createbtn}>Cancel</button></Link>
            </div>
            : <h1>Loading...</h1>}
        </form>
       
    );
}

export default EditPage;