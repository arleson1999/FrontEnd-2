import { useEffect, useState } from "react";
import Contato from "./Contato";

function Consulta() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    async function fectContatos() {
      try {
        const response = await fetch("http://localhost:3000/contatos");
        if (!response.ok) {
          throw new Error("Erro ao buscar os contatos");
        }
        const data = await response.json();
        setContatos(data);
      } catch (error) {
        console.error("Erro ao buscar os contatos", error);
      }
    }
    fectContatos();
  }, []);

  return (
    <div>
      <h2>Lista de contatos</h2>
      {contatos.map((contato, index) => {
        return (
          <Contato
            key={index}
            nome={contato.nome}
            telefone={contato.telefone}
            endereco={contato.endereco}
            cep={contato.cep}
          />
        );
      })}
    </div>
  );
}

export default Consulta;

// exemplo do response no mockoon
// [
//   {
//     "nome": "Ipog Mockoon",
//     "endereco": "Setor Bueno",
//     "telefone": "6299999",
//     "cep":"000000",
//     "casa": "000"
//   },
//   {
//     "nome": "Ipog 2 Mockoon",
//     "endereco": "Setor Central",
//     "telefone": "6299999",
//     "cep":"000000"
//   },
//   {
//     "nome": "Ipog 3 Mockoon",
//     "endereco": "Anapolis",
//     "telefone": "6299999",
//     "cep":"000000"
//   },
//   {
//     "nome": "Ipog 4 Mockoon",
//     "endereco": "Setor Marista",
//     "telefone": "6299999",
//     "cep":"000000"
//   },
//   {
//     "nome": "Ipog 5 Mockoon",
//     "endereco": "Setor Marista",
//     "telefone": "6299999",
//     "cep":"000000"
//   }
// ]
