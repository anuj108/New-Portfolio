import React from 'react'
import "./menu.css"
export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#intro">HOME</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">ABOUT ME</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#work">PORTFOLIO</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#education">EDUCATION</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    )
}
