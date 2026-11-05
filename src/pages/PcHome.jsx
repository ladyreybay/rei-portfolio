import "./pcMonStyles.css";

function PcHome(){
    return(
        <div className="pcMon">
            <h1>Home</h1>
            <h1 class="bigText"><span id="difFontOpening">Wanna be creative?</span> <span id="hookOpening">I will let my world LEAK out to help with that!!</span></h1>
            <p className="shortText">
                I will get <em>my</em> inner world to meet with ours and change your life - and designs :3
            </p>
            <h1>Check me out online OR contact me!</h1>
            <div id="socialsContain">
                <a href="https://github.com/ladyreybay">GitHub</a>
                <a href="https://artfight.net/~katmeower" className="offsetDown">Art Fight</a>
                <a href="https://www.instagram.com/reythemightymeow/">Instagram</a>
            </div>
        </div>
    );
}

export default PcHome;