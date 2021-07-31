import "./portfolio.css"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
    frontendPortfolio,
    javascriptPortfolio,
    // graphicPortfolio,
} from "../../data";
export default function Portfolio() {
    const [selected,setSelected] = useState("frontend");
    const [data,setData] = useState([]);
    const list= [
        {
            id: "frontend",
            title: "Frontend", 
        },
        {
            id: "javascript",
            title: "Javascript Projects",
        },
        // {
        //     id: "design",
        //     title: "Graphic Designing",
        // },
    ];
    useEffect(()=>{

        switch(selected)
        {
            case "frontend":
                setData(frontendPortfolio);
                break;
            case "javascript":
                setData(javascriptPortfolio);
                break;
                // case "design":
                // setData(graphicPortfolio);
                // break;
            default:
                setData(frontendPortfolio);


        }

    },[selected]);
    return (
        <div className="Portfolio" id="projects">
            <hr />
            <div className="top1">
            <h1>PROJECTS</h1>
            </div>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
