import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import FicheLogement from "./components/FicheLogement";
import Header from "./components/Header";
import About from "./components/About";

function App() {
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
