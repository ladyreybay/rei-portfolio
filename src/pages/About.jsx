import { Link } from "react-router-dom";

function About(){
    return(
        <>
            <div className="center">
                <img src="/bookcaseCloseup.png" id="bookcaseCloseup"/>
            </div>
            <Link to="/home">
                <img src="/roomBackground.png" id="roomBackground"/>
            </Link>
        </>
    );
}

export default About;