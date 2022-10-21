import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {authActions} from "../../redux/slices/auth.slice";
import {userValidator} from "../../validators";
import css from './Login.module.css';

const Login = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const {themes} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';

    const submit = (data) => {
        dispatch(authActions.setUser(data));
        navigate(fromPage, {replace:true});
    };

    return (
        <div className={css.login_wrapper} id={themes.main}>

            <form onSubmit={handleSubmit(submit)} id={themes.form}>

                <h2>Login</h2>

                <label className={css.name_label}><i className="fa-solid fa-user"></i></label>
                <input type="text" placeholder={'Username'} {...register('username')}/>

                {errors.username && <div className={css.name_error}>{errors.username.message}</div>}
                <label className={css.pass_label}><i className="fa-solid fa-lock"></i></label>

                <input type="text" placeholder={'Password'} {...register('password')}/>
                {errors.password && <div className={css.pass_error}>{errors.password.message}</div>}

                <button disabled={!isValid}>Login</button>

            </form>

        </div>
    )

};

export {Login};