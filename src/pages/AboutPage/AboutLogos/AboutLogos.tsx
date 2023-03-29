import p1 from "../../../assets/p1.png";
import p8 from "../../../assets/p8.png";
import cen from "../../../assets/CEN.png";
import pixl from "../../../assets/pixlLogo.png";
import soulovi from "../../../assets/VI.png";
import mystere from "../../../assets/mystere.png";
import radio from "../../../assets/5kradio.png";

const logoArr:string[] = [p1, p8,cen, pixl, soulovi, mystere, radio]

export function AboutLogos(){
    
    return(
        <div className="about-logos-cntr">
            {logoArr.map((logo) => <img src={logo} className="about-logos"/>) }
        </div>

    )
}