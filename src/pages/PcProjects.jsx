import "./pcMonStyles.css";

function PcProjects(){
    return(
        <div className="pcMon">
            <h1>Projects</h1>
            <h2>Links for Projects!</h2>
            <div>
                <a href="https://artfight.net/~katmeower">Art Fight profile for art projects</a>
                <br/>
                <a href="https://github.com/ladyreybay">GitHub profile for coding projects</a>
            </div>
            <hr/>
            <h2>Art Projects</h2>
            <div>
                <p className="shortText">
                    I have worked on multiple projects in my own personal time and throughout my university career. 
                    I have notibly focused a lot on digital 2D art as well as some 3D art using Blender!
                </p>
                <section>
                    <h3>Blender Project</h3>
                    <p className="shortText">
                        Do you hear that? The loud conversations overlapping each other; the drunken brawls that break out like wildire; the 
                        singing when the night grows old... Ah, the wonders of living in a fantasy realm where the end of your day is met by 
                        the friendly hold of your local tavern!
                        <br/>
                        This is the final looks of my room project I did for IMY 211. Come and take look, maybe get some drinks and 
                        snacks as you do it...
                    </p>
                    <div>
                        <img src="/roomCloseup.png"/>
                        <img src="/roomCloseup1.png"/>
                        <img src="/fullroom1.png"/>
                        <img src="/fullroom2.png"/>
                        <video autoPlay muted loop controls>
                            <source src="/roomVideo.mp4"/>
                        </video>
                    </div>
                    <div>
                        <h4>Notes About Project</h4>
                        <p className="shortText">
                            For this project we had to design a room of our own choosing. I decided on making a tavern from some fantasy setting. 
                            After modeling the room and texturing it we had to add lighting and animte the room as it is being "built." For this 
                            project my room was chosen as one of the top picks amongst other Multimedia students.<br/>
                            Throughout this project I learned how to properly plan out an idea I have for a 3D model&#40;s&#41;, model those plans, 
                            as well as learning how to make effective lighting and ensuring that the textures do not look stretched or messy on the models!
                        </p>
                    </div>
                </section>
                <section>
                    <h3>General 2D Projects</h3>
                    <div>
                        <h4>Lostland Comic</h4>
                        <p className="shortText">
                            The bustling of this blasted city is a pain! Argh, is it that hard to just be called MYSELF without others 
                            choosing what <em>I AM</em>! This will be my last day here...
                            <br/>
                            Welcome to the world of Lostland where a transgender outcast attempts to take control back from their life they may 
                            or may not have been living for years.
                        </p>
                        <object data="/lostlandComic.pdf" width={400} height={600}></object>
                    </div>
                    <div>
                        <h4>Lostland Infographic</h4>
                        <p className="shortText">
                            Want to know more about the world of Lostland? Well then just hop on in and rip the poster of dreams to make it 
                            a reality!
                        </p>
                        <p className="shortText"><a href="../../otherProjects/infoGraphic/infoGraphic.html">Lostland Infographic</a></p>
                        <a href="https://github.com/ladyreybay/lostlandInfographic">GitHub repo for this project</a> to run locally
                    </div>
                    <div>
                        <h4>Lostland Animated Webcomic</h4>
                        <p className="shortText">
                            Jump into the lively world of Lostland with some beatiful animation done by me! :3
                        </p>
                        <p className="shortText"><a href="../../otherProjects/webAnim/index.html">Lostland Animated Webpage</a></p>
                        <a href="https://github.com/ladyreybay/lostlandAnimation">GitHub repo for this project</a> to run locally.
                    </div>
                    <div>
                        <h4>Characters</h4>
                        <h4>Arc</h4>
                        <img src="/newArcCharSheet.png"/>
                    </div>
                </section>
            </div>
            <h2>Coding Projects</h2>
            <div>
                <h3>TIVIDY: Workflow Manager</h3>
                <p className="shortText">
                    TIVIDY is a generic workflow managment program. It is designed to take input from a user for a workflow 
                    and allows for them to manage it. I was one of five contributors for this project. 
                    <br/>
                    This project was designed test our knowledge and understanding of design patterns and to see if we are able to 
                    implement them in a useable program.
                </p>
                <a href="https://github.com/yashGhela/cos214prac6">GitHub repo for TIVIDY</a>
            </div>
        </div>
    );
}

export default PcProjects;