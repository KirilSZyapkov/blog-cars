import { Link } from 'react-router-dom';

import {joinTheBlog} from '../../../services/data';
import style from './BlogWelcomePage.module.css';

function BlogWelcomePage({
    blog,
    user
}) {
   

    async function joinTeam(){
        
        await joinTheBlog(user.id, blog.objectId);
    }

    async function leaveTeam(){

    }

    async function cancelJoinRequest(){

    }

    async function removeFromMemberFromGroup(){

    }

    async function approveMembershipRequest(){
        alert('Request approved!');
    }

    async function declineMembershiRequest(){

    }

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
                            <Link to={`/blog/edit/${blog.objectId}`} className={style.action}>Edit team</Link>
                            <button onClick={joinTeam} className={style.action}>Join team</button>
                            <a href="#" className={style.action} className={style.invert}>Leave team</a>
                            Membership pending. <a href="#">Cancel request</a>
                        </div>
                    </div>
                </header>
                <div className={style.pad_large}>
                    <h3>Members</h3>
                    <ul className={style.tm_members}>
                        <li><p>Admin: <Link to={`/admin/${blog.admin?.objectId}`}>{blog.admin?.username}</Link> </p></li>
                        <li><p className={style.tm_members_p}>James</p><button className={style.tm_control} className={style.action}>Remove from team</button></li>
                        
                    </ul>
                </div>
                <div className={style.pad_large}>
                    <h3>Membership Requests</h3>
                    <ul className={style.tm_members}>
                        <li><p className={style.tm_members_p}>Petar</p><button onClick={approveMembershipRequest} className={style.tm_control} className={style.action}>Approve</button><button
                            className={style.tm_control} className={style.action}>Decline</button></li>
                        
                    </ul>
                </div>
            </article >
        </section >
    );
}

export default BlogWelcomePage;