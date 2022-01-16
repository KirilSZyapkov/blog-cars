import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Members from './MemberItem/Members';
import PendingMembers from './MemberItem/PendingMembers';


import {joinTheBlog, declineRequest, approveRequest, removeMember} from '../../../services/data';
import style from './BlogWelcomePage.module.css';
import Notification from '../../common/Notification/Notification'; 

function BlogWelcomePage({
    blog,
    user,    
    pendings,
    members,
    refresh,
    found,
    changePage,
    isAdmin,
}) {

    const [errorM, setErrorM] = useState(null);
    
    const navigation = useNavigate();

    const isPending = pendings.some(m=> m[user.username] === user.objectId);
     
    async function joinTeam(){
        try{

            await joinTheBlog(user.objectId, blog.objectId);
            alert('Join request sended!');
            navigation('/');
        } catch(err){
            setErrorM(err.message);
        }
    }

    async function removeMemberFromGroup(memberId){
       try{

           await removeMember(user.objectId, memberId, blog.objectId);
           alert('Member removed successfully!');
           refresh();
       } catch(err){
           setErrorM(err.message);
       }

    }

    async function approveMembershipRequest(userId){
        try{

            await approveRequest(user.objectId, userId, blog.objectId);
            refresh();
        } catch(err){
            setErrorM(err.message);
        }
    }

    async function declineMembershiRequest(userId){
        
        try{

            await declineRequest(user.objectId, userId, blog.objectId);
            refresh();
        } catch(err){
            setErrorM(err.message);
        }
              
    }
    
    setTimeout(() => {
        setErrorM(null);
    }, 8000);

    return (
        <section className={style.team_home}>
            {blog.blogName ?
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
                           {isAdmin 
                           ? <>
                                <Link to={`/blog/edit/${blog.objectId}`} className={style.action}>Edit blog</Link>
                                <button onClick={()=>changePage()} className={style.action}>Chat</button>
                             </> 
                           : <>{ found ?
                                <a href="#" className={style.action} className={style.invert}>Leave team</a>
                            :
                            <>
                            {isPending ? <> Membership pending. <a href="#">Cancel request</a> </>: <button onClick={joinTeam} className={style.action}>Join team</button>}</> }
                            </>
                            
                           }
                        </div>
                    </div>
                    {errorM && <Notification message={errorM} />}
                </header>
                <div className={style.pad_large}>
                    <h3>Members</h3>
                    <ul className={style.tm_members}>
                        <li><p>Admin: <Link to={`/admin/${blog.admin?.objectId}`}>{blog.admin?.username}</Link> </p></li>
                        {members.length > 0 ? members.map(m => <Members isAdmin={isAdmin} key={Object.values(m)} user={m} removeFromTeamFunc={removeMemberFromGroup} />) : 'No body joined the group yet!'}
                        
                    </ul>
                </div>
                {isAdmin ? 
                <div className={style.pad_large}>
                    <h3>Membership Requests</h3>
                    <ul className={style.tm_members}>
                       {pendings.length>0 ? pendings.map(m=> <PendingMembers key={Object.values(m)} user={m} declineMembershiFun={declineMembershiRequest} approveMembershipFun={approveMembershipRequest}/>) : 'No request found!'}
                    </ul>
                </div>
                : ""}
            </article >
            : <h1>Loading...</h1>}
        </section >
    );
}

export default BlogWelcomePage;