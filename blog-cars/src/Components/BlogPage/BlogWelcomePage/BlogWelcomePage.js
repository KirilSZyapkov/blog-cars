
import { Link, useNavigate } from 'react-router-dom';

import {joinTheBlog} from '../../../services/data';
import style from './BlogWelcomePage.module.css';

function BlogWelcomePage({
    blog,
    user
}) {

    const navigation = useNavigate();
    console.log(blog);
    console.log(user);

    const admin = blog.admin || {};
    const pendingForMembershipList = blog.pendingForMembership || [];

    const a = pendingForMembershipList.some(m=> m[user.username] === user.objectId);
    console.log(a);
      
    async function joinTeam(){
        
        await joinTheBlog(user.objectId, blog.objectId);
        alert('Join request sended!');
        navigation('/');
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
                           { admin.objectId === user.objectId ? <Link to={`/blog/edit/${blog.objectId}`} className={style.action}>Edit team</Link> : ''}
                           { (admin.objectId !== user.objectId && (pendingForMembershipList.some(m=> m[user.username] === user.objectId))) ? <button onClick={joinTeam} className={style.action}>Join team</button> : ''}
                            {/* <a href="#" className={style.action} className={style.invert}>Leave team</a>
                            Membership pending. <a href="#">Cancel request</a> */}
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