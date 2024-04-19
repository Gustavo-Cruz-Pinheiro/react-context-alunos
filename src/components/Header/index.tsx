import { useContext } from "react"
import "./styles.css"
import { UserContext } from "../../context/user"
export function Header() {
    const { qtdAlunos } = useContext(UserContext)

    return(
        <nav className='navbar'>
            Total de Alunos: {qtdAlunos}
        </nav>
    )
}