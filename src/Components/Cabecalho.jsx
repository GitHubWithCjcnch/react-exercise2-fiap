import { Link } from "react-router-dom";
import cabecalho from "../css/Cabecalho.css";
export default function Cabecalho(){

    return(
        <>
            <header>
                <h1>Cadastro de produtos</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                </ul>
            </header>
        </>
    )
}