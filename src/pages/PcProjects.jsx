import "./pcMonStyles.css";

function PcProjects({specClass, setSpecClass}){
    setSpecClass("pcMon");
    return(
        <>
            <h1>Projects</h1>
            <h2>Art Projects</h2>
            <div>
                <p>
                    I have worked on multiple projects in my own personal time and throughout my university career. 
                    I have notibly focused a lot on digital 2D art as well as some 3D art using Blender!
                </p>
                <section>
                    <h3>Blender Project</h3>
                    <div>
                        <img src="/roomCloseup1.png"/>
                        <img src="/roomCloseup2.png"/>
                        <img src="/fullroom1.png"/>
                        <img src="/fullroom2.png"/>
                        <video autoPlay muted loop controls>
                            <source src="/roomVideo.mp4"/>
                        </video>
                    </div>
                </section>
                <section>
                    <h3>General 2D Projects</h3>
                    
                </section>
            </div>
            <h2>Coding Projects</h2>
            <div>

            </div>
        </>
    );
}

export default PcProjects;