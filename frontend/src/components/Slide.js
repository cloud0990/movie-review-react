import { useState, useEffect } from "react";

import style from "styles/components/Slide.module.css";
import Movie from "components/Movie";

function Slide({ movie }) {
    const [trans, setTrans] = useState(0);

    const leftBtn = () => {
        if (trans >= 0) {
            return;
        }
        setTrans(current => current + 350);
    }
    const rightBtn = () => {
        if (trans <= -2450) {
            return;
        }
        setTrans(current => current - 350);
    }

    return (
        <div className={style.container}>
            <div className={style.slide__show}>
                <div className={style.slide} style={{
                    transform: `translateX(${trans}px)`
                }}>
                    {movie.map((element) => (
                        <Movie
                            key={element.id}
                            id={element.id}
                            title={element.title}
                            coverImg={element.medium_cover_image}
                            genres={element.genres}
                            year={element.year}
                            movie__style={{
                                minWidth: "350px",
                                height: "300px",
                            }}
                        />
                    ))}
                </div>
            </div>
            <div>
                <button className={style.left} onClick={leftBtn}><i className="fas fa-caret-square-left"></i></button>
                <button className={style.right} onClick={rightBtn}><i className="fas fa-caret-square-right"></i></button>
            </div>
        </div>
    )
}

export default Slide;