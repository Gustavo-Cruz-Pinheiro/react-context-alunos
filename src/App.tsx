
import { Aluno } from './components/Aluno'
import './App.css'
import { UserProvider } from './context/user'

function App() {

  return (
    <UserProvider>
      <div>
        <Aluno />
      </div>
    </UserProvider>
  )
}

export default App
