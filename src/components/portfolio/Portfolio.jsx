import "./portfolio.css";
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  frontendPortfolio,
  fullstackPortfolio,
  allPortfolio,
  // graphicPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "Everything",
    },
    {
      id: "fullstack",
      title: "Full-Stack",
    },
    {
      id: "frontend",
      title: "Frontend",
    },
   
    // {
    //     id: "design",
    //     title: "Graphic Designing",
    // },
  ];
  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(frontendPortfolio);
        break;
        case "all":
        setData(allPortfolio);
        break;
      case "fullstack":
        setData(fullstackPortfolio);
        break;
      // case "design":
      // setData(graphicPortfolio);
      // break;
      default:
        setData(frontendPortfolio);
    }
  }, [selected]);
  return (
    <div className="Portfolio" id="projects">
      <hr />
      <div className="top1">
        <h1 class="hover-underline-animation"><span>P</span>ROJECT WORK</h1>
      </div>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href ={d.link} target="_blank">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
