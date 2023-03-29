import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "components/Movie.module.css";

// ES6 Template Literal 문법: {``}
function Movie({id, title, coverImg, summary, genres, year }) {
    return (
        <div className={style.movie}>
            <img src={coverImg} alt={title} className={style.movie__img}/>
            <div className={style.movie}>
                <h2 className={style.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={style.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={style.movie__genres}>
                    {genres.map((g) => (<li key={g}>{g}</li>))}
                </ul>
            </div>
        </div>
    );
}

// Home 에서 전달되는 함수 Argument (Props 가 Object 로 전달해줌)
Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;