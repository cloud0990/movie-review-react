import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "styles/components/Movie.module.css";

function Movie({ id, title, coverImg, genres, year, summary, movie__style }) {
    if(coverImg === "") {
        return null;
    }

    return (
        <div className={style.movie} style={movie__style}>
            <img src={coverImg} alt={title} className={style.movie__img}/>
            <div>
                <h2 className={style.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={style.movie__year}>{year}</h3>
                <ul className={style.movie__genres}>
                    {genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
                <p>{summary && summary.length > 180 ? `${summary.slice(0, 180)}...` : summary}</p>
            </div>
        </div>
    );
}

// Slide 에서 전달되는 함수 Argument (Props 가 Object 로 전달해줌)
Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    /*summary: PropTypes.string.isRequired,*/
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;