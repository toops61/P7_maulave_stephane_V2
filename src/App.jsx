import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import logements from "../logements.json";
import FicheLogement from "./components/FicheLogement";
import Header from "./components/Header";

function App() {
  console.log(logements);

  return (
    <main className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement" element={<FicheLogement />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </main>
  )
}

export default App
