import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h2>Sistema de Contatos</h2>
      <p>
        <link to="/cadastro">Cadastro</link>
      </p>
      <p>
        <link to="/consulta">Consulta</link>
      </p>
    </div>
  );
}
