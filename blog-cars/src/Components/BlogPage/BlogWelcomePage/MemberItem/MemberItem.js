function MemberItem({
    name,
    removeFromTeamFunc
}){
    return(
        <li><p className={style.tm_members_p}>James</p><button onClick={()=>removeFromTeamFunc()} className={style.tm_control} className={style.action}>Remove from team</button></li>
    );
}

export default MemberItem;