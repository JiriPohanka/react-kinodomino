import { Link } from "react-router-dom";

function Header() {

    return (
        <nav >
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}



export default Header