import style from '../BlogWelcomePage.module.css';

function Memebers({
    user,
    removeFromTeamFunc,
    isAdmin
}){
    const userName = Object.keys(user);
    const userId = Object.values(user);
    return(
        <li><p className={style.tm_members_p}>{userName}</p>{isAdmin && <button onClick={()=>removeFromTeamFunc(userId[0])} className={style.tm_control} className={style.action}>Remove from blog</button>}</li>
    );
}

export default Memebers;