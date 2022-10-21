import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";
import css from './ThemeSwitch.module.css';

const ThemeSwitch = () => {

    const light_themes = {
        header: 'header_light',
        navbar: 'navbar_light',
        main: 'main_light',
        card: 'card_light',
        body: 'body_light',
        details: 'details_light',
        form: 'form_light',
        genres: 'genres_light'
    };

    const dark_themes = {
        header: 'header_dark',
        navbar: 'navbar_dark',
        main: 'main_dark',
        card: 'card_dark',
        body: 'body_dark',
        details: 'details_dark',
        form: 'form_dark',
        genres: 'genres_dark'
    };

    const {themes} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();


    const toggleTheme = () => {
        themes.header === 'header_light' ?
            dispatch(themeActions.setTheme({...dark_themes})) :
            dispatch(themeActions.setTheme({...light_themes}));
    };

    return (<div className={css.switch}>

        <button onClick={toggleTheme}>
            {themes.header === 'header_light' ?
                <i className="fa-solid fa-sun"></i> :
                <i className="fa-solid fa-moon"></i>}
        </button>

        {themes.header === 'header_light' ? <div>Light</div> : <div>Dark</div>}

    </div>)
}

export {ThemeSwitch};