import { ComputerScene } from "./Computer/ComputerScene";
import { Hero } from "./Hero";
import { Links } from "./Links";
import "./home.css"


export default function Home(){
    return( 
        <div className="home">
            <Hero />
                <Links/>
            <ComputerScene />
        </div>
    )
}