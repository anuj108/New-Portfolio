import "./topbar.css"
// import {Mail} from "@material-ui/icons"
// import LaptopChromebookRoundedIcon from '@material-ui/icons/LaptopChromebookRounded';
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"Topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >AJ</a>
                    <div className="itemContainer">
                        {/* <LaptopChromebookRoundedIcon className="icon"/> */}
                        <a href="#intro" className="hover-underline-animation">HOME</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#about" className="hover-underline-animation">ABOUT</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#education" className="hover-underline-animation">EDUCATION</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#projects" className="hover-underline-animation">PROJECTS</a>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className="icon"/> */}
                        <a href="#contact" className="hover-underline-animation">CONTACT</a>
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
