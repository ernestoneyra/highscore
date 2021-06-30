import { Link } from "react-router-dom";
import '../styles/global.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-success d-flex justify-content-center mb-3 pt-4">
        <Link to={"/"} className="white">
        <span className="navbar-brand"><h1>High Score</h1></span>
          </Link>

</nav>
    )
}

export default Navbar;