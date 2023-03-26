import data from "./db.json";
import radio from "../../assets/5kradio.png";
import pixl from "../../assets/pixl.png";
import tarot from "../../assets/tarot.png";
import mystere from "../../assets/mystere.png";

interface Projects{
    id: number;
    title: string;
    desc: string;
    refs: string;
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
    refs: element.Ref,
    link: element.Link,
    src: element.Src
}))
console.log(img)
console.log(newData)

export function Cards(){
    return (
        <>
        {newData.map((project: Projects) => (
            <div className="card" key={project.id}>
                <img src={img[project.id-1].src} style={{width:200, height:200, borderRadius:100}}></img>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.desc}</p>
                <p className="project-refs">{project.refs}</p>
                <a className="card-link" href={project.link as string}>See project...</a>
            </div>
        ))}
        </>
    )
}