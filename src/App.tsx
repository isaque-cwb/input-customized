import { Input } from "./components/input/input"
import { FaArchive } from "react-icons/fa";
import { IconContext } from "react-icons";


function App() {

  return (
    <>
      <div className='flex flex-1 w-full h-screen bg-gray-100 items-center justify-center rounded-lg'>
        <div className=' w-96 h-auto p-4  rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white'>
          <IconContext.Provider value={{ color: '#CCC', size: '0.760rem' }}>
            <Input placeholder="Digite seu nome" inputId='nome' text={"Nome"} state="none" icon={<FaArchive />} />
            <Input placeholder="Digite seu sobrenome" inputId="sobrenome" text={"Sobrenome"} state="error" icon={<FaArchive />} />
            <Input placeholder="Digite seu CPF" inputId='cpf' text={"CPF"} state="none" />
            <Input placeholder="Digite sua rua" inputId="rua" text={"Rua"} state="success" icon={<FaArchive />} />
          </IconContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App
