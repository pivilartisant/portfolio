import { Link } from "react-router-dom";

export function DesktopNavbar(){
    return ( 
        <div className="navbar-desktop">
            <div className="nav-cntr">
                <ul className="nav-ul">
                    <li className="nav-li">  <Link to={"/"}>/home</Link></li>
                    <li className="nav-li">  <Link to={"/gallery"}> /gallery</Link></li>
                    <li className="nav-li">  <Link to={"/about"}>/about me</Link></li>
                </ul>
            </div>
        </div>
    )
}