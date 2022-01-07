import { Link } from 'react-router-dom';

import style from './BlogWelcomePage.module.css';

function BlogWelcomePage({
    blog,
    user
}) {
    console.log(blog);
    console.log(user);

    return (
        <section className={style.team_home}>
            <article className={style.layout}>
                <header className={style.header}>
                    <div className={style.team_logo}>
                        <img className={style.team_logo_img} src={blog.imgUrl} alt={blog.blogName} />
                    </div>
                    <div className={style.tm_preview}>
                        <h2>{blog.blogName}</h2>
                        
                        <p>{blog.description}</p>
                        <span className={style.details}><p>{blog.members?.length} Members</p></span>
                        <div>
                            <a href="#" className={style.action}>Edit team</a>
                            <a href="#" className={style.action}>Join team</a>
                            <a href="#" className={style.action} className={style.invert}>Leave team</a>
                            Membership pending. <a href="#">Cancel request</a>
                        </div>
                    </div>
                </header>
                <div className={style.pad_large}>
                    <h3>Members</h3>
                    <ul className={style.tm_members}>
                        <li><p>Admin: <Link to={`/admin/${blog.admin?.objectId}`}>{blog.admin?.username}</Link> </p></li>
                        <li><p className={style.tm_members_p}>James</p><a href="#" className={style.tm_control} className={style.action}>Remove from team</a></li>
                        <li><p className={style.tm_members_p}>Meowth</p><a href="#" className={style.tm_control} className={style.action}>Remove from team</a></li>
                    </ul>
                </div>
                <div className={style.pad_large}>
                    <h3>Membership Requests</h3>
                    <ul className={style.tm_members}>
                        <li><p className={style.tm_members_p}>Petar</p><button className={style.tm_control} className={style.action}>Approve</button><button
                            className={style.tm_control} className={style.action}>Decline</button></li>
                        <li><p className={style.tm_members_p}>Petya</p><a href="#" className={style.tm_control} className={style.action}>Approve</a><a href="#"
                            className={style.tm_control} className={style.action}>Decline</a></li>
                    </ul>
                </div>
            </article >
        </section >
    );
}

export default BlogWelcomePage;