import {useNavigate} from "react-router-dom";

function Welcome(){
    const navigate = useNavigate();

    function handleMove(){
        navigate("home");
    }

    return(
        <>
            <article>
                <p>You are about to enter the inner mind of Rei Piater-Boswell</p>
                <button onClick={handleMove}>Proceed</button>
            </article>
        </>
    );
}

export default Welcome;