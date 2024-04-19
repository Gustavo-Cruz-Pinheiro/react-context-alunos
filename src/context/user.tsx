import { createContext, ReactNode, useState } from "react";

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    alunos: string[];
    aluno: string;
    qtdAlunos: number;
    mudarNome: (nome: string) => void;
    adicionarAluno: (nome: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
    const [alunos, setAlunos] = useState<string[]>([]);
    const [aluno, setAluno] = useState('Novo Aluno');
    const [qtdAlunos, setQtdAlunos] = useState(0);

    function mudarNome(nome: string) {
        setAluno(nome)
    }

    function adicionarAluno(nome: string) {
        setAlunos([...alunos, nome]);
        setQtdAlunos(prevQtd => prevQtd + 1);
        mudarNome(nome);
    }
    
    return (
        <UserContext.Provider value={{ alunos, aluno, qtdAlunos, mudarNome, adicionarAluno }}>
            {children}
        </UserContext.Provider>
    )

}