import { useState } from 'react'
import './style/App.css'
import FormAddNovo from './FormAddNovo'
import Cards from './Cards'
import CardsVendidos from './CardsVendidos'
import Tabs from './Tabs'
import {v4 as uuidv4} from 'uuid'

function App() {
  
  const [estoque, setEstoque] = useState([])
  const addEstoque = (veiculo) => {
    setEstoque([...estoque, veiculo])
  }

  const removerVeiculo = (id) =>{
    setEstoque(estoque.filter(veiculo => veiculo.id != id))
  }

  const [ListVendidos,setListVendidos] = useState([])

  const removerVendido = (id) => {
    setListVendidos(ListVendidos.filter(veiculo=>veiculo.id != id))
  }

  const addVendidos = (id,cliente) =>{
    setListVendidos([...ListVendidos, {...estoque.filter(veiculo => veiculo.id == id), cliente_nome: cliente.nome, cliente_cpf: cliente.cpf}])
    removerVeiculo(id)
  }

  return (
    <>
      <h1>Estoque concessionária</h1>
      <FormAddNovo addEstoque={addEstoque}/>
      <Tabs estoque={estoque} removerVeiculo={removerVeiculo} addVendidos={addVendidos} ListVendidos={ListVendidos} removerVendido={removerVendido}/>
    </>
  )
}

export default App
