import { useState } from 'react'
import car_image from './img/car_lowpoly.jpg'
import './style/Cards.css'
import Venda from './Venda'

const Cards = ({estoque, removerVeiculo, addVendidos}) =>{

    const [vendaVisivel, setVendaVisivel] = useState(false)

    const toggleVenda = () => {
        setVendaVisivel(vendaVisivel => !vendaVisivel)
    }

    return(
        <>{estoque.length > 0 ? 
            estoque.map(veiculo => {
    
                return(
                    <>
                    <div key={veiculo.id} className='cardMaior'>
                        <div className={`card ${vendaVisivel? 'blur' : ''}`}>
                            <img src={car_image} alt="" />
                            <div>
                                <p><strong>Marca: </strong>{veiculo.marca}</p>
                                <p><strong>Modelo: </strong>{veiculo.modelo}</p>
                                <p><strong>Ano: </strong>{veiculo.ano}</p>
                                <p><strong>Cor: </strong>{veiculo.cor}</p>
                            </div>
                            <div className='remove-sell'>
                                <button onClick={()=>removerVeiculo(veiculo.id)}>Remover</button>
                                <button onClick={()=>toggleVenda()}>Vender</button>
                            </div>
                        </div>
                        {vendaVisivel ? <Venda addVendidos={addVendidos} id={veiculo.id}/> : null}
                    </div>
                    </>
                )
            }
                
                
            )
            : <p>Estoque vazio</p>
        }
        
        </>
    )
}

export default Cards