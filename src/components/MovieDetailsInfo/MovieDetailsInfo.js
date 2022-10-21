import {useSelector} from "react-redux";

import css from './MovieDetailsInfo.module.css';

const MovieDetailsInfo = ({movieDetails}) => {

    const {production_companies, production_countries, genres} = movieDetails;

    const {themes} = useSelector(state => state.themeReducer);

    return (
        <div>
            <div className={css.info} id={themes.details}>
                <h4>Rating:</h4>
                <div><span>{movieDetails.vote_average} </span>({movieDetails.vote_count})
                </div>
            </div>
            {
                movieDetails.tagline ?
                    <div className={css.info}>
                        <h4>Tagline:</h4>
                        <div>«{movieDetails.tagline}»</div>
                    </div> :
                    <></>
            }
            <div className={css.info}>
                <h4>Release:</h4>
                <div>{movieDetails.release_date}</div>
            </div>
            {
                genres && genres.length !== 0 ?
                    <div className={css.info}>
                        <h4>Genres:</h4>
                        <div className={css.genres}>{movieDetails.genres.map(genre => <div
                            key={genre.id} className={css.info_inner}>{genre.name} </div>)}</div>
                    </div> :
                    <></>
            }
            <div className={css.info}>
                <h4>Runtime:</h4>
                <div>{movieDetails.runtime} min.</div>
            </div>
            {
                movieDetails.budget !== 0 ?
                    <div className={css.info}>
                        <h4>Budget:</h4>
                        <div>{movieDetails.budget}$</div>
                    </div> :
                    <></>
            }
            {
                production_countries && production_countries.length !== 0 ?
                    <div className={css.info}>
                        <h4>Countries:</h4>
                        <div
                            className={css.countries}>{production_countries.map((country, index) =>
                            <div className={css.info_inner} key={index}>{country.name}</div>)}</div>
                    </div> :
                    <></>
            }
            {
                production_companies && production_companies.length !== 0 ?
                    <div className={css.info}>
                        <h4>Production Companies:</h4>
                        <div
                            className={css.companies}>{production_companies.map(company =>
                            <div className={css.info_inner}
                                 key={company.id}>{company.name}</div>)}</div>
                    </div> :
                    <></>
            }
        </div>
    )

}

export {MovieDetailsInfo};