import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div>
            <Link to={"/"}>Main</Link>
            <Link to={"/create"}>Create</Link>
            <Link to={"/about"}>About</Link>
        </div>
    )
}

export default Header