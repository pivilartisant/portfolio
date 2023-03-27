import { Cards } from "./Cards";
import "./gallery.css"
import { GalleryHero } from "./GalleryHero";

export function Gallery(){

    return (
        <div className="gallery">
            <GalleryHero/>
            <div className="cards">
                <Cards/>
            </div>
        </div>
    )
}