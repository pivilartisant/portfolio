import TextAbout from "./AboutText/TextAbout";
import "./about.css";
import { AboutLogos } from "./AboutLogos/AboutLogos";

export default function About(){
    return( 
        <div className="about">
            <TextAbout/>
            <AboutLogos/>
        </div>
    )
}