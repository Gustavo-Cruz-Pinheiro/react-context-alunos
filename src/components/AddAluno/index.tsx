import { useContext, useState } from "react";
import { UserContext } from "../../context/user";


export function AddAluno() {
    const [novoAluno, setNovoAluno] = useState('');
    const { adicionarAluno } = useContext(UserContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setNovoAluno('');

        adicionarAluno(novoAluno);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={novoAluno} name="aluno" id="aluno" onChange={(e) => setNovoAluno(e.target.value)}  placeholder="Nome do aluno" required/>
                <button type="submit">Adicionar Aluno</button>
            </form>
        </div>
    )
}