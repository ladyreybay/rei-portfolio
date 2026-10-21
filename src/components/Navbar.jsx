import {Link, useLocation} from "react-router-dom";
import "./navbar.css";

function Navbar(){
    const loc = useLocation();
    if(loc.pathname!="/pc"&&loc.pathname!="/pc/home"&&loc.pathname!="/pc/about"&&loc.pathname!="/pc/projects"){
        return(null);
    }else{
        return(
            <nav>
                <Link to="/pc/home">Home</Link>
                <Link to="/pc/about">About</Link>
                <Link to="/pc/projects">Projects</Link>
                <Link to="/">
                    <img src="" alt="Exit Icon"/>
                </Link>
            </nav>
        );
    }
}

export default Navbar;