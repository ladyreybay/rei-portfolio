import ReturnButton from "../components/returnButton";
import "./pcMonStyles.css";

function PcAbout({local}){
    return(
        <div className="pcMon" id="aboutMe">
            {local&&<ReturnButton/>}
            <h1>About Me</h1>
            <div id="selfOverview">
                <ul>
                    <li><span className="biggerFont">Pronouns:</span> They/She</li>
                    <li><span className="biggerFont">Name:</span> Rei Piater-Boswell</li>
                    <li><span className="biggerFont">Wanted:</span> <span id="maybePart">Maybe...</span> :3</li>
                </ul>
            </div>
            <h2>Sale?</h2>
            <div id="aboutSelf">
                <img src="/self3.jpg" id="aboutSelfImg"/>
                <p className="shortText">
                    Hi there! Welcome to the world of my head!! &#40;^ ω ^&#41;
                    <br/>
                    I am Rei Piater-Boswell, currently I am a Multimedia student at the Unviersity of Pretoria. I aspire to become a game developer 
                    alongside other things. I am willing to learn about anything that interests me as well that may furhter my career and 
                    goals!
                </p>
            </div>
            <h2 id="whatInspoMe">What Inspires Me</h2>
            <div id="inspo">
                <p className="shortText">
                    As a Multimedia student and artist I am inspired by multiple things around me. My main inspiration comes from other video games 
                    such as Deltarune, Paradise Killer, and the Persona series! 
                    <br/>
                    I am not afraid to play games that are deemed "bad" as I believe those games contain some things that are great but are just 
                    poorly implemented. These games are a source of my learning alongside "good" games and lessons from those in the gaming 
                    industry and experts in game development.
                </p>
            </div>
        </div>
    );
}

export default PcAbout;