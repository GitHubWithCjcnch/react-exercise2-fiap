import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import styles from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { MdDeleteForever as Excluir } from "react-icons/md";
import { AiOutlineShopping as Shopping } from "react-icons/ai"
import { BsFillPlusCircleFill as AddIcon } from "react-icons/bs"

export default function Produtos() {
  document.title = "Lista de Produtos";

  return (
    <main>
      <h1>Produtos</h1>
      <div className={styles.mainDiv}>
        {ListaProdutos.map((produto, indice) => (
          <div className={styles.productContainer} key={indice}>
            <div className={styles.containerNameProduct}>
              <Shopping className={styles.icon} />
              <span className={styles.nameProduct}>{produto.id} | {produto.nome}</span>
            </div>
            <span className={styles.lineBetween}>|</span>
            <div className={styles.detailsProduct}>
              <h3>R$ {produto.preco},00</h3>
              <div className={styles.editExcludeContainer}>
                <Link
                  className={styles.buttonStyle}
                  to={`/editar/produtos/${produto.id}`}>
                  <Editar />
                  Editar
                </Link>
                <Link
                  className={styles.buttonStyle}
                  to={`/excluir/produtos/${produto.id}`}>
                  <Excluir />
                  Excluir
                </Link>
              </div>
            </div>
          </div>
        ))}
        <button
          className={styles.buttonStyle}
        >
          <AddIcon />Adicionar Produto
        </button>
      </div>
    </main>
  )
}
