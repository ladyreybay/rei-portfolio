import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App(){
    return(
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/pc" element={<Home/>}/>
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