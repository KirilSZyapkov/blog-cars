import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Members from './MemberItem/Members';
import PendingMembers from './MemberItem/PendingMembers';


import {joinTheBlog} from '../../../services/data';
import style from './BlogWelcomePage.module.css';
import Notification from '../../common/Notification/Notification'; 

function BlogWelcomePage({
    blog,
    user
}) {
    const [errorM, setErrorM] = useState(null);

    const navigation = useNavigate();

    const pendingForMembershipList = blog.pendingForMembership || [];
    const membersList = blog.members || [];

    // const a = pendingForMembershipList.some(m=> m[user.username] === user.objectId);
    // console.log(a);
      
    async function joinTeam(){
        try{

            await joinTheBlog(user.objectId, blog.objectId);
            alert('Join request sended!');
            navigation('/');
        } catch(err){
            setErrorM(err.message);
        }
    }

    async function leaveTeam(){

    }

    async function cancelJoinRequest(){
        
    }

    async function removeFromMemberFromGroup(){
        alert('Removed!');
    }

    async function approveMembershipRequest(){
        alert('Request approved!');
    }

    async function declineMembershiRequest(){
        alert('Cancel');
    }

    setTimeout(() => {
        setErrorM(null);
    }, 8000);

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
                            {/* <a href="#" className={style.action} className={style.invert}>Leave team</a>
                            Membership pending. <a href="#">Cancel request</a> */}
                        </div>
                    </div>
                    {errorM && <Notification message={errorM} />}
                </header>
                <div className={style.pad_large}>
                    <h3>Members</h3>
                    <ul className={style.tm_members}>
                        <li><p>Admin: <Link to={`/admin/${blog.admin?.objectId}`}>{blog.admin?.username}</Link> </p></li>
                        {!membersList.length > 0 ? membersList.map(m => <Members user={m} removeFromTeamFunc={removeFromMemberFromGroup} />) : 'No body joined the group yet!'}
                        
                    </ul>
                </div>
                <div className={style.pad_large}>
                    <h3>Membership Requests</h3>
                    <ul className={style.tm_members}>
                       {pendingForMembershipList.length>0 ? pendingForMembershipList.map(m=> <PendingMembers key={Object.values(m)} user={m} declineMembershiFun={declineMembershiRequest} approveMembershipFun={approveMembershipRequest}/>) : 'No request found!'}
                        
                    </ul>
                </div>
            </article >
        </section >
    );
}

export default BlogWelcomePage;