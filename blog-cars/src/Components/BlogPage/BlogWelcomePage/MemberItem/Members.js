import style from '../BlogWelcomePage.module.css';

function Memebers({
    username,
    removeFromTeamFunc
}){
    return(
        <li><p className={style.tm_members_p}>{username}</p><button onClick={()=>removeFromTeamFunc()} className={style.tm_control} className={style.action}>Remove from team</button></li>
    );
}

export default Memebers;