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
                        HELLO THERE, I am an ordinary human who was named as ANUJ SHAKYA 19 years back in 2002 . 
I have successfully survived these 19 years but now I am pursuing B-Tech CSE degree from Abes Engineering College, Ghaziabad (2020-2024) . Talking about my skills -- and at last talking about my hobbies I love listening music and many more things (I can't remember right now).
                            </div>
                        <button className="btn"><a href="https://drive.google.com/file/d/1-tgMGyB4zRuh8pOK1Ug4QTQ5lZJJCMS7/view?usp=sharing" className="resume">RESUME</a>
                        </button>
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
