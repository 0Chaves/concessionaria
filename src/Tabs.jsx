import Cards from './Cards'
import CardsVendidos from './CardsVendidos'
import { useState } from 'react'
import './style/Tabs.css'

const Tabs = ({estoque, removerVeiculo, addVendidos, ListVendidos, removerVendido}) =>{
    const [selected, setSelected] = useState("Estoque")

    return(
        <>
        <ul className='Tabs'>
            <li onClick={()=> setSelected("Estoque")}>Estoque</li>
            <li onClick={()=> setSelected("Vendidos")}>Vendidos</li>
        </ul>
        {selected == "Estoque" ? <Cards estoque={estoque} removerVeiculo={removerVeiculo} addVendidos={addVendidos}/> : <CardsVendidos ListVendidos={ListVendidos} removerVendido={removerVendido}/>}
        </>
    )

}

export default Tabs