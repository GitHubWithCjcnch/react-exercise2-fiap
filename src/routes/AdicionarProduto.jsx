import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ListaProdutos } from "../Components/ListaProdutos";

export default function AdicionarProduto() {
  document.title = "Adicionar Produto";

  // utilizando o useNavigate para realizar o redirecionamento.
  const navigate = useNavigate();

  // rastrear os dados do novo produto.
  const [novoProduto, setNovoProduto] = useState({
    id: ListaProdutos.length + 1,
    nome: "",
    preco: "",
  });

  // manipula a mudança nos campos do formulário.
  const mudancaProduto = (event) => {
    const { name, value } = event.target;
    setNovoProduto({
      ...novoProduto,
      [name]: value,
    });
  };

  // manipula o envio do formulário
  const tratarEnvio = (event) => {
    event.preventDefault();

    // validacao
    if (novoProduto.nome && novoProduto.preco) {
      // adicione o novo produto à lista de produtos existente
      ListaProdutos.push(novoProduto);
      alert("Produto adicionado com sucesso!");

      // redirecione para a página de produtos após adicionar o produto
      navigate("/produtos");
    }
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={tratarEnvio}>
        <fieldset>
          <legend>Novo Produto</legend>
          <div>
            <label htmlFor="idNome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              onChange={mudancaProduto}
              value={novoProduto.nome}
              required
            />
          </div>
          <div>
            <label htmlFor="idPreco">Preço:</label>
            <input
              type="number"
              name="preco"
              id="idPreco"
              onChange={mudancaProduto}
              value={novoProduto.preco}
              required
            />
          </div>
          <div>
            <button type="submit">Adicionar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
