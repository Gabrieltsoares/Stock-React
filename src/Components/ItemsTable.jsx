import {Link} from "react-router-dom";
import useStock from "../Hooks/useStock";

export default function ItemsTable () {
    const { items } = useStock();

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>

                </tr>
            </thead>
        </table>
    )
 }