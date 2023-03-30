import {useEffect, useState} from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import navList from "atom/NavList";
import {listPageReLoading, focusNav} from "atom/Atoms";

import style from "styles/components/Navbar.module.css";

const activeStyle = {
    textDecoration: "none",
    color: "red",
    fontSize: "25px",
}
const disActiveStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
}

function Navbar() {
    const pageReLoading = useSetRecoilState(listPageReLoading);
    const [focusPath, setFocusPath] = useRecoilState(focusNav);

    const goPathClick = (e) => {
        pageReLoading(true);
    }

    return (
        <div className={style.container}>
            <div className={style.home__logo}>
                <Link to={`/`} style={{textDecoration: "none", fontSize: "40px", fontWeight: "700", color: "red"}}>
                    {`DETFLIX`}
                </Link>
            </div>
            {
                navList.map((element, idx) => (
                    <div className={style.pageName} key={idx}>
                        <NavLink to={`/page/${element.path}`}
                                 onClick={ focusPath !== element.path ? goPathClick : null }
                                 style={({isActive}) => {
                                     return isActive ? activeStyle : disActiveStyle;
                                 }
                                 }>{element.title}</NavLink>
                    </div>
                ))
            }

        </div>
    )
}

export default Navbar;
