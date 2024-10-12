import CardVendido from "./CardVendido"

const CardsVendidos = ({ListVendidos}) => {

    return(
        <div>
            {ListVendidos.length > 0 ? ListVendidos.map(veiculo=><CardVendido veiculo={veiculo}/>): <p>Não há carros vendidos</p>}
        </div>
    )
}

export default CardsVendidos