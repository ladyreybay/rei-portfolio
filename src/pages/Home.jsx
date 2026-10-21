import { Link } from 'react-router-dom';
import '../mainStyle.css';
import { useState } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

function Home(){
    const [source, setSource] = useState("/pcMonitor.png");

    return(
        <div>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <MouseParallaxChild factorX={0.0} factorY={0.0}>
                    <img src="/roomWall.png"/>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.0} factorY={0.0}>
                    <img src="/stars.png"/>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.5} factorY={0.7}>
                    <img src="/wallDebrisFloat.png" id="wallDebrisFloat"/>
                </MouseParallaxChild>
            </MouseParallaxContainer>
            <Link to="/bookcase">
                <img src="/bookcase.png" id="bookcase"/>
            </Link>
            <section id="pcCol">
                <Link to="/pc">
                    <img src={source} id="monitor" onMouseOver={()=>setSource("/pcMonitorOn.png")} onMouseLeave={()=>setSource("/pcMonitor.png")}/>
                </Link>    
                <img src="/pcIso.png" id="pcIso"/>
            </section>
            <Link to="/projects">
                <img src="/posters.png" id="posters"/>
            </Link>
        </div>
    );
}

export default Home;