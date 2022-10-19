import Switch from '@mui/material/Switch';
import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";
import css from './ThemeSwitch.module.css'

const ThemeSwitch = () => {

    const light_themes = {
        header: 'header_light',
        search: 'search_light',
        main: 'main_light',
        card: 'card_light',
        body: 'body_light',
        details: 'details_light'
    }

    const dark_themes = {
        header: 'header_dark',
        search: 'search_dark',
        main: 'main_dark',
        card: 'card_dark',
        body: 'body_dark',
        details: 'details_dark'
    }

    const {themes} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();
    const {header} = themes


    const toggleTheme = () => {
        header === 'header_light' ?
            dispatch(themeActions.setTheme({...dark_themes})) :
            dispatch(themeActions.setTheme({...light_themes}))
    }

    return (
        <div className={css.switch}>
            <Switch
                onChange={toggleTheme}
                color={'default'}
                checked={header === 'header_dark'}
            />

            {header === 'header_light' ?
                <div>Light</div> :
                <div>Dark</div>
            }
        </div>
    )
}

export {ThemeSwitch}