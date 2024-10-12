import { useState } from "react"

const Venda = ({addVendidos, id}) =>{

    const [nome, setNome] = useState('')

    const handleInputNome = (e) =>{
        setNome(e.target.value)
    }

    const [cpf, setCpf] = useState('')

    const handleInputCpf = (e) =>{
        setCpf(e.target.value)
    }

    return(
    <>
    <div className={`Venda`}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" onChange={handleInputNome} value={nome}/>
        <label htmlFor="cpf">Cpf: </label>
        <input type="text" id="cpf" onChange={handleInputCpf} value={cpf}/>

        <button onClick={()=>{
            let cliente = {nome: '', cpf: ''}
            cliente.nome = nome
            cliente.cpf = cpf
            addVendidos(id, cliente)
            setNome('')
            setCpf('')
        }}>Vender</button>
    </div>
    </>
    )
}

export default Venda