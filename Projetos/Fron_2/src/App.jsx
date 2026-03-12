import { Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Cadastro } from "./components/Cadastro";
import { Consulta } from "./components/Consulta";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
    </div>
  );
}
