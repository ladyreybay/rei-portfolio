import { Link } from "react-router-dom";

function ReturnButton(){
    return(
        <Link id="returnButtonLink" to="/">
            <div className="styleReturnButton">Go Back</div>
        </Link>
    );
}

export default ReturnButton;