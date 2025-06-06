import { useEffect, useState } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
// import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import OpenSource from "./components/OpenSource/OpenSource";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import IndexCatNat from "./components/Thematiques/CatNat/IndexCatNat";
import IndexClimat from "./components/Thematiques/Climat/IndexClimat";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/thematiques/catnat" element={<IndexCatNat />} />
          <Route path="/thematiques/climat" element={<IndexClimat />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
