import { Link } from 'react-router-dom';
import '../mainStyle.css'
import { useState } from 'react';

function Home(){
    const [source, setSource] = useState("/pcMonitor.png");

    return(
        <div>
            <img src="/roomWall.png" id="roomWallBack"/>
            <img src="/wallDebrisFloat.png" id="wallDebrisFloat"/>
            <Link to="/bookcase">
                <img src="/bookcase.png" id="bookcase"/>
            </Link>
            <section id="pcCol">
                <Link to="/pc">
                    <img src={source} id="monitor" onMouseOver={e=>setSource("/pcMonitorOn.png")} onMouseLeave={e=>setSource("/pcMonitor.png")}/>
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