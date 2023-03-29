import { Link } from "react-router-dom";
import style from "styles/components/Navbar.module.css";

export default function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.pageName}>
                <Link to={`/`} style={{textDecoration: "none", color: "red", fontSize: "40px", fontWeight: "700"}}>
                    DETFLIX
                </Link>
            </div>
        </div>
    )
};