import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";
import {Userinfo} from "../UserInfo/Userinfo";
import {authActions} from "../../redux/slices/auth.slice";
import css from './Header.module.css';


const Header = ({setTheme, theme}) => {

    const {user} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleAuth = () => {
        if (!user) {
            navigate('login');
        } else {
            dispatch(authActions.setUser(null));
            navigate('/');
        }
    };

    return (
        <header>

            <div className={`${css.header_container} header`}>

                <ThemeSwitch theme={theme} setTheme={setTheme}/>

                <Link to={'/movies'} className={css.header_logo}><i
                    className="fa-solid fa-film"></i>Movies</Link>

                <div className={css.auth_wrapper}>
                    {user ? <Userinfo/> : <></>}
                    <button onClick={handleAuth}>{!user ? 'Login' : 'Logout'}</button>

                </div>
            </div>

        </header>
    )

};

export {Header};