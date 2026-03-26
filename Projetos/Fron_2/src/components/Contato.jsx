import styles from "./Contato.module.css";

function Contato({ nome, endereco, telefone, cep }) {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.field}>
          <p>
            <strong>Nome:</strong>
            {nome}
          </p>
        </div>
        <br />
        <div className={styles.field}>
          <p>
            <strong>Endereco:</strong>
            {endereco}
          </p>
        </div>
        <br />
        <div className={styles.field}>
          <p>
            <strong>Telefone:</strong>
            {telefone}
          </p>
        </div>
        <br />
        <div className={styles.field}>
          <p>
            <strong>Cep:</strong>
            {cep}
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Contato;
