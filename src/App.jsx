import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import PcMonitor from "./pages/PcMonitor";
import Welcome from "./pages/Welcome";
import PcAbout from "./pages/PcAbout";
import PcProjects from "./pages/PcProjects";
import PcHome from "./pages/PcHome";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App(){
    const [specClass, setSpecClass] = useState("");

    return(
        <BrowserRouter>
            <main id="appMain" className={specClass}>
                <Navbar setSpecClass={setSpecClass}/>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/bookcase" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/code" element={<Projects/>}/>
                    <Route path="/projects/art" element={<Projects/>}/>
                    <Route path="/pc" element={<PcHome specClass={specClass} setSpecClass={setSpecClass}/>}/>
                    <Route path="/pc/about" element={<PcAbout specClass={specClass} setSpecClass={setSpecClass}/>}/>
                    <Route path="/pc/projects" element={<PcProjects specClass={specClass} setSpecClass={setSpecClass}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;