import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <h2>Sistema de Contatos</h2>
      <div className={styles.context}>
        <Link to="/cadastro">Cadastro</Link>
      </div>
      <div className={styles.context}>
        <Link to="/consulta">Consulta</Link>
      </div>
    </div>
  );
}

export default Home;
