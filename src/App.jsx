import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";
import PcAbout from "./pages/PcAbout";
import PcProjects from "./pages/PcProjects";
import PcHome from "./pages/PcHome";
import Navbar from "./components/Navbar";

function App(){
    return(
        <BrowserRouter>
            <main id="appMain">
                <Navbar/>
                <Routes>
                    {/*<Route path="/" element={<Welcome/>}/>*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/bookcase" element={<PcAbout local={true}/>}/>
                    <Route path="/projects" element={<PcProjects local={true}/>}/>
                    <Route path="/projects/code" element={<Projects/>}/>
                    <Route path="/projects/art" element={<Projects/>}/>
                    <Route path="/pc" element={<PcHome/>}/>
                    <Route path="/pc/about" element={<PcAbout local={false}/>}/>
                    <Route path="/pc/projects" element={<PcProjects local={false}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;