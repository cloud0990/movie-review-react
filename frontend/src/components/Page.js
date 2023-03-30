import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import Move from "components/Movie";
import Loading from "components/Loading";
import { listPageReLoading, focusNav } from "atom/Atoms";

import style from "styles/components/Page.module.css";

function Page() {
    const { detail } = useParams();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useRecoilState(listPageReLoading);
    const focusPage = useSetRecoilState(focusNav);

    const getMovie = async () => {
        const response = await (
            await fetch('https://yts.mx/api/v2/list_movies.json?' + detail)
        ).json();

        setMovie(response.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        setReload(false);
        focusPage(detail);

        getMovie();

    }, [reload]);

    return (
        <div className={style.container}>
            {
                loading ? <Loading /> : (
                    <div className={style.movies}>
                        {movie.map((element) => (
                                <Move
                                    key={element.id}
                                    id={element.id}
                                    title={element.title}
                                    coverImg={element.large_cover_image}
                                    genres={element.genres}
                                    year={element.year}
                                    summary={element.summary}
                                    movie__style={{
                                        minWidth: "350px",
                                        height: "300px",
                                    }}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Page;