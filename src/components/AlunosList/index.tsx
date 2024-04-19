import { useContext } from "react";
import { UserContext } from "../../context/user";

export function AlunosList() {
    const { alunos } = useContext(UserContext);

    return (
        <div>
            <div>
                <h2>Lista de Alunos:</h2>
                <ul>
                    {alunos.map((aluno, index) => (
                        <li key={index}>{aluno}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}