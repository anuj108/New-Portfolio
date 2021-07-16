import "./intro.css"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import Aos from "aos";
export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
 
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["MAI", "ANUJ" , "HOON"],
        });

    },[]);

    // const Intro = () =>{
    //     useEffect(() => {
    //         Aos.init({ duration: 2000 });
            
    //     }, [])

    return (
        <div className="Intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me10.jpg" alt="#" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>HI THERE, I'M </h2>
                    <h1>ANUJ SHAKYA</h1>
                    <h3>STUDENT <span ref={textRef}></span></h3>
                </div>
                <a href="#about"><img src="assets/down.png" alt="" /></a>
                
            </div>
        </div>
    )
    };