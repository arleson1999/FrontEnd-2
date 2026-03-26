import styles from "./Cadastro.module.css";
import { useState } from "react";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Nome: ${formData.nome}, Endereco: ${formData.endereco}, Telefone: ${formData.telefone}`,
    );
    setFormData({ nome: "", endereco: "", telefone: "" });
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <input
          name="nome"
          value={formData.nome}
          placeholder="Digite seu nome"
          onChange={handleChange}
          required
        />
        <input
          name="endereco"
          value={formData.endereco}
          placeholder="Digite o seu endereço"
          onChange={handleChange}
          required
        />
        <input
          name="telefone"
          value={formData.telefone}
          placeholder="Digite seu telefone"
          required
          onChange={handleChange}
        />
        <footer>
          <button type="submit">Salvar</button>
        </footer>
      </form>
    </div>
  );
}

export default Cadastro;
