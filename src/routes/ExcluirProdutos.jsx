import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import  styles from "../css/EditarExcluir.module.css";

export default function ExcluirProdutos() {
  document.title = "Excluir Produtos";

  const { id } = useParams();

  const navigate = useNavigate();

  const produto = ListaProdutos.filter(
    (item) => item.id == id
  )[0];

  const handleDelete = () => {
    
    let indice;
    //Recuperar o indice do produto alterado com findIndex
    indice = ListaProdutos.findIndex((item) => item.id === produto.id);

    ListaProdutos.splice(indice, 1);
    alert("Produto foi excluído com sucesso!");

    //Realizando o redirect.
    navigate("/produtos");
  };

  return (
    <>
      <div className={styles.container_excluir}>
        <h1>Excluir Produtos</h1>
        <div className={styles.textbox}>
          <h2>Você tem certeza que deseja excluir esse produto?</h2>
          <p>Nome do Produto : {produto.nome}</p>
          <p>Preço do Produto : {produto.preco}</p>
          <div>
            <button onClick={handleDelete} className={styles.btn}>EXCLUIR</button>
            <button onClick={()=> navigate("/produtos")} className={styles.btn}>CANCELAR</button>
          </div>
        </div>
      </div>
    </>
  );
}
