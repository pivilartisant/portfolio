import "./navbar.css";
import { DesktopNavbar } from "./NavbarFormat/DesktopNavbar";
import { MobileNavbar } from "./NavbarFormat/MobileNavbar";

export function Navbar(){
    return (
        <div className="navbar">
            <DesktopNavbar/>
            <MobileNavbar/>
        </div>
        
    )
}