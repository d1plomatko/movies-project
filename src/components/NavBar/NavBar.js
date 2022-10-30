import {useState} from "react";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

import css from './NavBar.module.css'

const NavBar = ({setQuery}) => {

    const [toggle, setToggle] = useState(false);

    const {register, handleSubmit, reset} = useForm();

    const {genres} = useSelector(state => state.genreReducer);

    const submit = (data) => {
        if (data.query) {
            setQuery({query: data.query, page: '1'})
        }
        reset();
    };


    return (

        <div className={`${css.navbar} navbar`}>

            <div className={css.navbar_inner}>
                <button
                    onClick={() => setToggle(!toggle)}>{toggle ? 'Close' : 'Show Genres'}</button>
                <form onSubmit={handleSubmit(submit)} className={css.search}>
                    <input type="text"
                           placeholder={'Search by name'} {...register('query')}/>
                    <button>Search</button>
                </form>
            </div>

            {
                toggle && <div className={`${css.genres} genres`}>
                    {genres.map(genre => <button
                        onClick={() => setQuery({
                            page: '1',
                            with_genres: genre.id.toString()
                        })}
                        key={genre.id}>{genre.name}</button>)}
                </div>
            }

        </div>

    )

}

export {NavBar}