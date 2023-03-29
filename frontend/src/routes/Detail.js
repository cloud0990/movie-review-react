import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "components/Loading";

import style from "styles/routes/Detail.module.css";

function Detail() {

    // App.js 의 movie/:id 의 :id 를 전달 (:임의변수명)
    // 지정한 변수 url 값을 전달해줌
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const toMovieDetail = async() => {
            const responseJson = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();

            setDetail(responseJson.data.movie);
            setLoading(false);
        }
    }, []);

    return (
        <div>
            {loading ? <Loading />
                    : (
                        <div className={style.movie}>
                            <div className={style.movie__ticket}>
                                <h2 className={style.movie__title}>{detail.title}</h2>
                                <img src={detail.large_cover_image} alt={detail.title} className={style.movie__img} />
                            </div>
                            <div className={style.movie__detail}>
                                {<p>{`개봉년도: ${detail.year} 년`}</p>}
                                {<p>{`런타임: ${detail.runtime}`}</p>}
                                {<p>{`평점: ${detail.rating}`}</p>}
                                {<p>{`언어: ${detail.language}`}</p>}
                                {<p>{`추천: ${detail.like_count}`}</p>}
                                {<p>{`다운로드: ${detail.download_count}`}</p>}
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default Detail;