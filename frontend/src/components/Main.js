import { useState, useEffect } from "react";

import style from "styles/components/Main.module.css";

function Main({ movie }) {
    const [trans, setTrans] = useState(0);

    setTimeout(() => {
        setTrans(current => current - window.outerWidth);
    }, 10000);

    return (
        <div className={style.container}>
            <div className={style.slide__show}>
                <div className={style.slide} style={{
                    transform: `translateX(${trans}px)`
                }}>
                    {
                        movie.map((element) => (
                            <div style={{width: window.outerWidth, height: window.outerHeight, top:0}}>
                                <img className={style.bg} src={element.background_image_original}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;