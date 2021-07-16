import React from 'react'
import "./about.css"
export default function Work() {
    return (
        <div className="About" id="about">
            <hr />
        <div className="left">
            <div className="container">
            <div className="card">
                    <div className="center">
                        <div className="top">
                            ABOUT
                        </div>
                        <div className="content">
                            HELLO THERE, MY NAME IS ANUJ AND CURRENTLY I'M PURSUING MY BTECH FROM ABES ENGINEERING COLLEGE OR BAKI BAAD ME BTATA HU 
                            </div>
                        <button className="btn">RESUME</button>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="" alt="" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <img src="assets/img.png" alt="" />
            </div>
            {/* <a href="#education"><img src="assets/down.png" alt="" /></a> */}
        </div>
    </div>
    )
}
