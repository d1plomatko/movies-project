import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './Header.module.css';
import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";
import {Userinfo} from "../UserInfo/Userinfo";






const Header = () => {

    const {themes} = useSelector(state => state.themeReducer);

    return (
        <header>
            <div className={css.header_container} id={themes.header}>
                <ThemeSwitch/>
                <Link to={'/movies'} className={css.header_logo}><i className="fa-solid fa-film"></i>Movies</Link>
                <Userinfo/>
            </div>

        </header>
    )

}

export {Header}