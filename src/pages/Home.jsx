import { Link } from 'react-router-dom';
import '../mainStyle.css';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';

function Home(){
    return(
        <div>
            <img src="/roomWall.png"/>
            <img src="/stars.png"/>
            <section id="pcCol">
                <Link to="/pc">
                    <img src="/pcMonitor.png" id="monitor" onMouseOver={(e)=>e.currentTarget.src="/pcMonitorOn.png"} onMouseLeave={(e)=>e.currentTarget.src="/pcMonitor.png"}/>
                </Link>    
                <img src="/pcIso.png" id="pcIso"/>
            </section>
            <Link to="/projects">
                <img src="/posters.png" id="posters"/>
            </Link>
            <MouseParallaxContainer globalFactorX={0.15} globalFactorY={0.15}>
                <MouseParallaxChild factorX={0.2} factorY={0.3} style={{zIndex: 3}}>
                    <Link to="/bookcase">
                        <img src="/bookcase.png" id="bookcase"/>
                    </Link>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.6} factorY={0.5} style={{zIndex: 2}}>
                    <img src="/wallDebrisFloat2.png" id="wallDebrisFloat"/>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </div>
    );
}

export default Home;