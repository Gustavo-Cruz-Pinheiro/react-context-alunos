import { AddAluno } from "../AddAluno"
import { AlunosList } from "../AlunosList"
import { Header } from "../Header"
import { Nome } from "../Nome"

export function Aluno() {
    return (
        <div>
            <Header/>
            <Nome/>
            <AddAluno/>
            <AlunosList/>
        </div>
    )
}