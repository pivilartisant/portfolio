import { useState } from "react";
import { Link } from "react-router-dom";

export function MobileNavbar(){

    const [open, setNavDisplay] = useState(false)

    function handleClick(){
        open ? setNavDisplay(false) : setNavDisplay(true)
        console.log("click")
    }
    return (
            <div className="navbar-mobile" >
                <div className={`${open ? "open-nav-menu" : "closed-nav-menu"}`}>
                    <div className="mobile-nav-cntr">
                        <ul className="mobile-nav-ul">
                            <li className="mobile-nav-li" onClick={handleClick}>  <Link to={"/"}>/home</Link></li>
                            <li className="mobile-nav-li" onClick={handleClick}>  <Link to={"/gallery"}> /gallery</Link></li>
                            <li className="mobile-nav-li" onClick={handleClick}>  <Link to={"/about"}>/about me</Link></li>
                        </ul>
                    </div>
                </div>

            <div className="burger-menu-cntr" onClick={handleClick}>
                <div className="burger-menu"></div>
                <div className="burger-menu"></div>
                <div className="burger-menu"></div>    
            </div>
        </div>
    )
}