import css from './UserInfo.module.css';

const Userinfo = () => {

    return(
        <div className={css.user_info}>
            <div className={css.username}>Rick Sanchez</div>
            <img src='https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png' alt={'username'}/>
        </div>
    )

}

export {Userinfo}