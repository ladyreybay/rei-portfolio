import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";
import PcAbout from "./pages/PcAbout";
import PcProjects from "./pages/PcProjects";
import PcHome from "./pages/PcHome";
import { useState } from "react";

function App(){
    return(
        <BrowserRouter>
            <main id="appMain">
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/bookcase" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/code" element={<Projects/>}/>
                    <Route path="/projects/art" element={<Projects/>}/>
                    <Route path="/pc" element={<PcHome/>}/>
                    <Route path="/pc/about" element={<PcAbout/>}/>
                    <Route path="/pc/projects" element={<PcProjects/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;