import { NavLink } from "react-router-dom";

function Header(){
    return (
        <header>
            <h3><NavLink to={'/'} className="nav-link">BrowserRouter</NavLink></h3>
            <ul>
                <li><NavLink to={'/'} className="nav-link">Home</NavLink></li>
                <li><NavLink to={'about'} className="nav-link">About</NavLink></li>
                <li><NavLink to={'blogs'} className="nav-link">Blogs</NavLink></li>
            </ul>
        </header>
    )
}
export default Header;