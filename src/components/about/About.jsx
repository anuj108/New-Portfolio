import React from "react";
import "./about.css";
import Fade from 'react-reveal/Fade';
export default function Work() {
  return (
    <div className="About" id="about">
      <hr />
      <div className="left">
        <div className="container">
        <Fade left>
          <div className="card">
            <div className="center">
              <div className="top">
                <span>ABOUT</span>
              </div>
              <div className="content" data-aos="fade-left">
                I'm Anuj Shakya currently pursuing a major in Computer Science &
                Engineering from ABES Engineering College, Ghaziabad. I am into
                competitive programming and web development. Currently, I'm
                learning full-stack web development in MERN and working on a few
                projects as well.
              </div>
              <button className="btn">
                <a
                  href="https://drive.google.com/file/d/1-tgMGyB4zRuh8pOK1Ug4QTQ5lZJJCMS7/view?usp=sharing"
                  className="resume"
                >
                  RESUME
                </a>
              </button>
            </div>
          </div>
          </Fade>
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
  );
}
