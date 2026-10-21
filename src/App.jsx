import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import PcMonitor from "./pages/PcMonitor";
import Welcome from "./pages/Welcome";

function App(){
    return(
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/bookcase" element={<About/>}/>
                    <Route path="/bookcase/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/code" element={<Projects/>}/>
                    <Route path="/projects/art" element={<Projects/>}/>
                    <Route path="/pc" element={<PcMonitor/>}/>
                    <Route path="/pc/home" element={<Home/>}/>
                    <Route path="/pc/about" element={<About/>}/>
                    <Route path="/pc/projects" element={<Projects/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;