import Style from "../styles/ErrorPage.module.css"
import ErrorIcon from "../assets/error.svg"

const Error = () => {
    return (
        <div className={Style.wrapper}>
            <img src={ErrorIcon} alt="error" />
            <a href={"/"}>Home</a>
        </div>
    )
}

export default Error