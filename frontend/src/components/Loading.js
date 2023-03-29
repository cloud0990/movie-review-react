import style from "styles/components/Loading.module.css";

export default function Loading() {
    return (
        <div className={style.loading}>
            <span>Loading...</span>
        </div>
    )
};