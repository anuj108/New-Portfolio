import "./topbar.css"
import {Mail} from "@material-ui/icons"
// import LaptopChromebookRoundedIcon from '@material-ui/icons/LaptopChromebookRounded';
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"Topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >AJ</a>
                    <div className="itemContainer">
                        {/* <LaptopChromebookRoundedIcon className="icon"/> */}
                        <a href="#intro">HOME</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#about">ABOUT</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#education">EDUCATION</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#portfolio">PROJECTS</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
