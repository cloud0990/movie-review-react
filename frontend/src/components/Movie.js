import PropTypes from "prop-types";
import { Link } from "react-router-dom";


// ES6 Template Literal 문법 -> {``} 사용해야함
// -> {`${name} 님 안녕하세요.`}
function Movie({id, title, coverImg, summary, genres }) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImg} alt={title}/>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
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