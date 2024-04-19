import { useContext } from "react"
import { UserContext } from "../../context/user";

export function Nome() {
    const { aluno } = useContext(UserContext)
    
    return(
        <div>
            <span>
                Último Aluno: {aluno}
            </span>
        </div>
    )
}