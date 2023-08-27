import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import FicheLogement from "./components/FicheLogement";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [logementsArray, setLogementsArray] = useState(null);

  const getLogements = async () => {
    const URL = '../../logements.json';
    try {
      const response = await fetch(URL);
      if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`)
      }
      const resultArray = await response.json();
      if (resultArray.length) {
        setLogementsArray(resultArray);
        sessionStorage.setItem('logementsArray',JSON.stringify(resultArray));
      } 
    } catch (error) {
        console.log(error);
    }
  }

  const changeBodySize = () => {
    const bodyDom = document.querySelector('body');
    window.innerWidth < window.innerHeight ? bodyDom.style.height = window.innerHeight + 'px' : bodyDom.style.height = '';
  }

  useEffect(() => {
    window.addEventListener('resize', changeBodySize);
    changeBodySize();

    getLogements();

    return () => {
      window.removeEventListener('resize', changeBodySize);
    }
  }, []);

  return (
    <main className="App">
      <div className="app-container">
        <Header />
        <Routes>
            <Route path="/" element={<Home logementsArray={logementsArray} />} />
            <Route path="/logement/:id" element={<FicheLogement logementsArray={logementsArray} />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App
