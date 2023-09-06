import  { useLenguageContext, LenguageArr }  from "../contexts/LenguageContext"
import Style from "../styles/AboutPage.module.css"

const AboutPage = () => {
    const {lenguage} = useLenguageContext()

    return (
        <div className={Style.wrapper}>
            <div className={Style["info-box"]}>
                <p>{LenguageArr[lenguage].aboutPageText}</p>
            </div>
        </div>
    )
}

export default AboutPage