import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import logementsArray from "../logements.json";
import FicheLogement from "./components/FicheLogement";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fillApparts } from "./redux/appartsSlice";
import About from "./components/About";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    logementsArray.length && dispatch(fillApparts(logementsArray));
  }, [logementsArray])
  

  return (
    <main className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </main>
  )
}

export default App
