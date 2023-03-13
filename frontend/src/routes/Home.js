import {useEffect, useState} from "react";
import Movie from "components/Movie";

function Home() {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    // async-await
    const getMovies = async () => {
        const responseJson = await (
            await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
        ).json();
        //const json = await response.json();

        setMovie(responseJson.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movie.map((m) => (
                        <Movie
                            key={m.id}
                            id={m.id}
                            coverImg={m.medium_cover_image}
                            title={m.title}
                            summary={m.summary}
                            genres={m.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;
