import CardVendido from "./CardVendido"

const CardsVendidos = ({ListVendidos, removerVendido}) => {

    return(
        <div>
            {ListVendidos.length > 0 ? ListVendidos.map(veiculo=><CardVendido veiculo={veiculo} removerVendido={removerVendido}/>): <p>Não há carros vendidos</p>}
        </div>
    )
}

export default CardsVendidos