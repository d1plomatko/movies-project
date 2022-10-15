import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './Header.module.css';
import {genreActions} from "../../redux";
import {Link} from "react-router-dom";


const Header = () => {

    const {genres} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, []);

    return (
        <header>
            <div className={css.header_container}>
                <button>Switcher</button>
                <Link to={'/'} className={css.header_logo}><i className="fa-solid fa-film"></i>Movies</Link>
                <button>Login</button>
            </div>
            <div className={css.filters}>
                <select>
                    {genres.map(genre => <option className={css.option} key={genre.id}>{genre.name}</option>)}
                </select>
                <form className={css.search}>
                    <input type="text" placeholder={'Search by name'}/>
                    <button>Search</button>
                </form>
            </div>
        </header>
    )

}

export {Header}