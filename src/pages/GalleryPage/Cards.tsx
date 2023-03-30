import data from "./db.json";
import radio from "../../assets/5kradio.png";
import pixl from "../../assets/pixl.png";
import tarot from "../../assets/tarot.png";
import mystere from "../../assets/mystere.png";
import arrow from "../../assets/arrow-top-right.png"

interface Projects{
    id: number;
    title: string;
    desc: string;
    refs: string[];
    link: string;
    src: string;
}

interface Img{
    id: number;
    src: string;
}

const img:Img[] = [
    {
    id: 1,
    src: mystere  
    },
    {
    id: 2,
    src: radio 
    }, 
    {
    id: 3,
    src: pixl
    }, 
    {
    id: 4,
    src: tarot
    },    
]

let newData:Projects[] = data.map((element)=> ({
    id: element.ID,
    title: element.Title,
    desc: element.Desc,
    refs: element.Ref.split(" "),
    link: element.Link,
    src: element.Src
}))


export function Cards(){
    return (
        <>
        {newData.map((project: Projects) => (
            <div className="card" key={project.id}>
                <div className="gallery-img-cntr">
                    <img className="card-img" src={img[project.id-1].src} ></img>
                </div>
                <div className="gallery-card-info">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.desc}</p>
                    <div className="card-refs">
                        {project.refs.map((ref)=>
                            <p className="card-ref">
                                {ref}
                            </p>
                        )}
                    </div>
                    <div className="card-link-cntr">
                        <p className="card-link-p">Visit   <a className="card-link-a" target={"_blank"} href={project.link as string}>{project.title}</a> <img className="card-link-i" src={arrow} alt="right arrow"/> </p>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}