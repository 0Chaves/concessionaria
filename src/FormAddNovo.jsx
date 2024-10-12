import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import './style/FormAddNovo.css'

const FormAddNovo = ({addEstoque}) =>{

    const[marca, setMarca] = useState("")
    const handleInputMarca = (e) =>{
        setMarca(e.target.value)
    }
    
    const[modelo, setModelo] = useState("")
    const handleInputModelo = (e) =>{
        setModelo(e.target.value)
    }

    const[ano, setAno] = useState("")
    const handleInputAno = (e) =>{
        setAno(e.target.value)
    }

    const[cor, setCor] = useState("")
    const handleInputCor = (e) =>{
        setCor(e.target.value)
    }

    const handleAddEstoque = ()=>{
        const veiculo = {marca: marca, modelo: modelo, ano: ano, cor: cor, id: uuidv4()}
        addEstoque(veiculo)
        setMarca("")
        setModelo("")
        setAno("")
        setCor("")
    }

    return(
        <>
        <div className="novoVeiculo">
            <p>Novo veiculo</p>
            <div className="input">
                <label htmlFor="marca">Marca: </label>
                <input id="marca" name="marca" type="text" value={marca} onChange={handleInputMarca}/>
            </div>
            <div className="input">
                <label htmlFor="modelo">Modelo: </label>
                <input id="modelo" name="modelo" type="text" value={modelo} onChange={handleInputModelo} />
            </div>
            <div className="input">
                <label htmlFor="ano">Ano: </label>
                <input id="ano" name="ano" type="text" value={ano} onChange={handleInputAno}/>
            </div>
            <div className="input">
            <label htmlFor="cor">Cor: </label>
            <input id="cor" name="cor" type="text" value={cor} onChange={handleInputCor}/>
            </div>
            <div>
                <button onClick={()=>handleAddEstoque()}>Adicionar</button>
            </div>
        </div>
        </>
    )
}

export default FormAddNovo