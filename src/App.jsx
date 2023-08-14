import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import FicheLogement from "./components/FicheLogement";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {

  const changeBodySize = () => {
    const bodyDom = document.querySelector('body');
    window.innerWidth < window.innerHeight ? bodyDom.style.height = window.innerHeight + 'px' : bodyDom.style.height = '';
  }

  useEffect(() => {
    window.addEventListener('resize', changeBodySize);
    changeBodySize();
    //window.matchMedia('(orientation: portrait)').addEventListener('change',e => setPortrait(e.currentTarget.matches));

    return () => {
      window.removeEventListener('resize', changeBodySize);
    }
  }, []);

  return (
    <main className="App">
      <div className="app-container">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App
