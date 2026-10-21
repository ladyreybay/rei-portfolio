import { Link } from 'react-router-dom';
import '../mainStyle.css';
//import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

function Home(){
    return(
        <div>
            <img src="/roomWall.png"/>
            <img src="/stars.png"/>
            <img src="/wallDebrisFloat.png" id="wallDebrisFloat"/>
            <Link to="/bookcase">
                <img src="/bookcase.png" id="bookcase"/>
            </Link>
            <section id="pcCol">
                <Link to="/pc">
                    <img src="/pcMonitor.png" id="monitor"/>
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