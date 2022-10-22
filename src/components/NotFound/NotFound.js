import {useSelector} from "react-redux";

import css from './NotFound.module.css';

const NotFound = () => {

    const {themes} = useSelector(state => state.themeReducer);

    return (
        <div className={css.not_found} id={themes.main}>
            <h1>NotFound</h1>
        </div>
    )

}

export {NotFound}