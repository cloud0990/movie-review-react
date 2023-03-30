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

    const toMovieDetail = async() => {
        const responseJson = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=` + id)
        ).json();

        setDetail(responseJson.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        toMovieDetail();
    }, []);

    return (
        <div className={style.container}>
            {loading ? <Loading />
                    : (
                        <div>
                            <img className={style.bg} src={detail.background_image}/>
                            <div className={style.show}>
                                <img className={style.img} src={detail.large_cover_image} alt={detail.title}/>
                                <div className={style.textbox}>
                                    <h1 className={style.title}>
                                        <a href={detail.url} target="_blank">{detail.title_long}</a>
                                    </h1>
                                        {<p>{`런타임: ${detail.runtime}`}</p>}
                                        {<p>{`평점: ${detail.rating}`}</p>}
                                        {<p>{`언어: ${detail.language}`}</p>}
                                        {<p>{`추천: ${detail.like_count}`}</p>}
                                        {<p>{`다운로드: ${detail.download_count}`}</p>}
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default Detail;