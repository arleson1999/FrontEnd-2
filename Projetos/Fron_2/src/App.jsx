import styles from "./App.module.css";
import Consulta from "./components/Consulta";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
