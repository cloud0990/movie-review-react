import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "css/Detail.module.css";

function Detail() {

    // App.js 의 movie/:id 의 :id 를 전달 (:임의변수명)
    // 지정한 변수 url 값을 전달해줌
    const { id } = useParams();
    //console.log(id)

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    // await 함수는 async function 내부에서만 사용할 수 있음

    const toMovieDetail = async() => {
        const responseJson = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setDetail(responseJson.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        toMovieDetail();
    }, []);

    return (
        <div>
            {loading ? (
                    <h1>Loading...</h1>
                ) : (

                <div>
                    <button>
                        <Link to={`${process.env.PUBLIC_URL}/`}>돌아가기</Link>
                    </button>
                    <div className={styles.container}>
                        <div id={styles.itemOne}>
                            <h1>{detail.title_long}</h1>
                            <img src={detail.large_cover_image} alt={detail.title} />
                        </div>
                        <div id={styles.itemTwo}>
                            <p><b>개봉년도: {detail.year}</b></p>
                            {/*<p>{`개봉년도: ${detail.year}`}</p>*/}
                            <p><b>추천: {detail.like_count}</b></p>
                            <p><b>다운로드 수: {detail.download_count}</b></p>
                            <p><b>평점: {detail.rating}</b></p>
                            <p><b>상영시간: {detail.runtime} 분</b></p>
                            <p><b>언어: {detail.language}</b></p>
                            <div>
                                <p><strong>장르</strong></p>
                                <ul>
                                    {detail.genres.map((g) => (
                                        <li key={g}>{g}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;