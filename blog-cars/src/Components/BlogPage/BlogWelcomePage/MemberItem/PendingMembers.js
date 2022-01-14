import style from '../BlogWelcomePage.module.css';

function PendingMembers({
    user,
    approveMembershipFun,
    declineMembershiFun
}){
    const userName = Object.keys(user);
    const userId = Object.values(user);
    return(
        <li>
            <p className={style.tm_members_p}>{userName}</p>
            <button onClick={()=>approveMembershipFun(userId[0])} className={style.tm_control} className={style.action}>Approve</button>
            <button onClick={()=>declineMembershiFun(userId[0])} className={style.tm_control} className={style.action}>Decline</button>
        </li>
    );
}

export default PendingMembers;