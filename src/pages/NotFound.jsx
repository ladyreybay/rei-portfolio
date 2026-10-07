import { Link } from "react-router-dom";

function NotFound(){
    return(
        <>
            <h1>404 - Not Found</h1>
            <p>
                Oopsies seems you have been trying to find NOTHING O-o
                <br/>
                Please <Link to="/">go back</Link>
            </p>
        </>
    );
}

export default NotFound;