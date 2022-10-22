import YouTube from "react-youtube";

import css from './TrailerPlayer.module.css';

const TrailerPlayer = ({children: videos, setTrailer}) => {

    const trailer = videos?.results.find(value => value.name === 'Official Trailer')

    const options = {
        playerVars: {
            autoplay: 1
        },
        width: '100%'

    };

    const key = trailer?.key || videos.results[0]?.key;


    return (
        <div className={css.trailer_wrapper}>
            <div className={css.trailer}>
                <button onClick={() => setTrailer(false)}><i className="fa-solid fa-xmark"></i>
                </button>
                <YouTube videoId={key} opts={options}/>
            </div>
        </div>
    )

}

export {TrailerPlayer}