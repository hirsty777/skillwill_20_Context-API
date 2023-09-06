import { Link } from "react-router-dom"
import { useLenguageContext, LenguageArr }  from "../contexts/LenguageContext"
import Style from "../styles/Header.module.css"
import EngIcon from "../assets/eng.webp"
import GeoIcon from "../assets/geo.webp"
import MainIcon from "../assets/plan-list.svg"

const Header = () => {
    const {lenguage,changeLenguage} = useLenguageContext()

    return (
        <div className={Style.wrapper}>
            <div className={Style["todo-icon"]}>
                <img src={MainIcon} alt="todo icon" />
            </div>
            <Link to={"/"}>{LenguageArr[lenguage].navbar.main}</Link>
            <Link to={"/create"}>{LenguageArr[lenguage].navbar.create}</Link>
            <Link to={"/about"}>{LenguageArr[lenguage].navbar.about}</Link>
            <div className={Style.icon}>
                <img src={lenguage === "en" ? EngIcon:GeoIcon} alt="lenguage" onClick={changeLenguage} />
            </div>
        </div>
    )
}

export default Header